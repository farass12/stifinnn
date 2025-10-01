import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const ContactPage = ({ data }, location) => {

  const [state, setState] = React.useState({})
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  return (
    <Layout title={siteTitle} social={social}>
      <Seo title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description} 
       image={
  data.markdownRemark.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData?.images?.fallback?.src ||
  "/default-thumbnail.jpg" // fallback jika thumbnail tidak tersedia
}
/>

     
      <article className="contact-form page-template ">
      {data.markdownRemark.frontmatter.thumbnail && (
        <div className="post-content-image">
          <GatsbyImage
            image={getImage(data.markdownRemark.frontmatter.thumbnail)}
            className="kg-image"
            alt={data.markdownRemark.frontmatter.title} />
        </div>
      )}
        <div className="post-content-body">
          <p></p>

          <h3 id="forms">Formulir</h3>
          <form name="contact" method="POST" data-netlify="true" action="thanks" onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="Nama-lengkap"
                  id="Nama-lengkap"
                  onChange={handleChange}
                  placeholder="Nama lengkap"
                  required={true}
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="Nama-panggilan"
                  id="Nama-panggilan"
                  onChange={handleChange}
                  placeholder="Nama panggilan"
                  required={true}
                />
              </div>

              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="demo-email"
                  onChange={handleChange}
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="Lokasi"
                  id="Lokasi"
                  onChange={handleChange}
                  placeholder="Lokasi"
                  required={true}
                />
              </div>
              {/* Break */}
              {/* General, Purchase, Commissions, Exhibitions, Gallery Feature, Other */}
              <div className="col-12">
                <select name="Kategori" id="Kategori" onChange={handleChange} required={true}>
                  <option value>-Paket yang di ambil-</option>
                  <option value={"personal/couple"}>Personal/Couple</option>
                  <option value={"Family"}>Family</option>
                  {/* <option value={"Komisi"}>Komisi</option>
                  <option value={"pemeran"}>Pemeran</option>
                  <option value={"fitur galeri"}>Fitur galeri</option>
                  <option value={"Lainnya"}>Lainnya</option> */}
                </select>
              </div>

              {/* Break */}
              {/* <div className="col-6 col-12-small">
                <input type="checkbox"
                  id="send-a-copy"
                  name="send-a-copy"
                  defaultValue='false'
                  onChange={handleChange} />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="iam-human"
                  name="iam-human"
                  defaultValue='false'
                  onChange={handleChange}
                />
                <label htmlFor="demo-human">I am a human</label>
              </div> */}
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="Pesan"
                  id="Pesan"
                  placeholder="Kirim pesan"
                  rows={6}
                  defaultValue={""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              
              <div data-netlify-recaptcha="true"></div>
  
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Kirim"
                      className="primary"
                    />
                  </li>

                </ul>
              </div>
            </div>
          </form>
        </div>


      </article>



    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social{
          twitter
          facebook
        }
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
                    }
        }
      }
      
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)


// import React from 'react'
// import { navigate } from 'gatsby-link'
// // import Layout from '../layout'

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

// export default function Contact() {
//   const [state, setState] = React.useState({})

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const form = e.target
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({
//         'form-name': form.getAttribute('name'),
//         ...state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute('action')))
//       .catch((error) => alert(error))
//   }

//   return (
//     <div>
//       <h1>Contact</h1>
//       <form
//         name="contact"
//         method="post"
//         action="/thanks/"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//         onSubmit={handleSubmit}
//       >
//         {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        // <input type="hidden" name="form-name" value="contact" />
        // <p hidden>
        //   <label>
        //     Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        //   </label>
        // </p>
//         <p>
//           <label>
//             Your name:
//             <br />
//             <input type="text" name="name" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your email:
//             <br />
//             <input type="email" name="email" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message:
//             <br />
//             <textarea name="message" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p>
//       </form>
//     </div>
//   )
// }
