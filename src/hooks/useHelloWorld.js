import { useStaticQuery } from "gatsby"

export const useHelloWorld = query => useStaticQuery(query)
  .allFile
  .nodes[0]
  .childYaml
  .hello
