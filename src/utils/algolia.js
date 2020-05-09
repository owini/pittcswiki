// https://www.gatsbyjs.org/docs/adding-search-with-algolia/

const pageQuery = `{
	pages: allMarkdownRemark {
	  nodes {
		frontmatter {
		  id
		  path
		  title
		}
		rawMarkdownBody
	  }
	}
  }`

// TODO add more search indexs. Take CS0447 for example - add "447" and cs 447 so is better for searching

const flatten = (arr) =>
  arr.map(({ frontmatter, ...rest }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.nodes),
    indexName: `Pages`,
    settings,
  },
]

module.exports = queries