import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"

import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
  credentials: "include",
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  fetch,
  link: authLink.concat(httpLink),
  cache,
  resolvers: {
    Mutation: {},
    Query: {},
  },
})

const data = {
  isLoggedIn: !!localStorage.getItem("token"),
  userTheme: localStorage.getItem("theme"),
}

cache.writeData({ data })

client.onResetStore(() => {
  cache.writeData({ data })
})
