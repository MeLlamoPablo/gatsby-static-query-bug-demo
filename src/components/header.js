import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useHelloWorld } from "../hooks/useHelloWorld"

const Header = ({ siteTitle }) => {
  const hello = useHelloWorld(graphql`
    {
      allFile(filter: {relativePath: {regex: "/Header\\/.+\\\\.yml/"}}) {
        nodes {
          childYaml {
            hello
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {hello}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
