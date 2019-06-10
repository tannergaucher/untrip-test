const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { getUserId, AuthError } = require('../utils/getUserId')
const { hasPermission } = require('../utils/hasPermission')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
      permissions: { set: ['FREE_USER'] },
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for this email`)
    }
    const passwordValid = await compare(password, user.password)

    if (!passwordValid) {
      throw new Error(`Invalid Password`)
    }
    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },

  // NOT NEEDED WHEN PUTTING TOKEN IN LOCAL STORAGE
  logout: (parent, { id }, context) => {
    return { message: 'Goodbye' }
  },

  toggleEvent: async (parent, { postId, name, image }, context) => {
    const userId = getUserId(context)

    const [existingEvent] = await context.prisma.user({ id: userId }).events({
      where: {
        postId,
      },
    })

    if (!existingEvent) {
      const event = await context.prisma.createEvent({
        postId,
        name: name,
        image: image,
        user: {
          connect: {
            id: userId,
          },
        },
      })

      return event
    } else {
      const event = await context.prisma.deleteEvent({
        id: existingEvent.id,
      })

      return event
    }
  },

  createList: async (parent, { title, postId, image, name }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new AuthError()
    }

    const list = await context.prisma.createList({
      title: title,
      places: {
        create: {
          name,
          // TODO change postId to Place id
          postId,
          image,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    })
    return list
  },
  deleteList: (parent, { listId }, context) => {
    return context.prisma.deleteList({ id: listId })
  },
  togglePlace: async (parent, { listId, postId, name, image }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new AuthError()
    }

    const [existing] = await context.prisma
      .user({ id: userId })
      .lists({
        where: {
          id: listId,
        },
      })
      .places({
        where: {
          postId,
        },
      })

    if (existing.places.length) {
      // remove place from list
      return context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            delete: {
              id: existing.places[0].id,
            },
          },
        },
      })
    } else {
      // add place to list
      return context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            create: {
              postId,
              name: name,
              image: image,
            },
          },
        },
      })
    }
  },
  toggleIsPrivateList: async (parent, { listId }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new AuthError()
    }
    // get the users list of id listId
    const [list] = await context.prisma.user({ id: userId }).lists({
      where: {
        id: listId,
      },
    })
    // if list is private, set isPrivate to false
    if (list.isPrivate) {
      const list = await context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          isPrivate: false,
        },
      })
      return list
    } else {
      // if list isn't private, set to private
      const list = await context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          isPrivate: true,
        },
      })
      return list
    }
  },
  updateListTitle: async (parent, { listId, newTitle }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const list = await context.prisma.updateList({
      where: {
        id: listId,
      },
      data: {
        title: newTitle,
      },
    })

    return list
  },
}

module.exports = {
  Mutation,
}
