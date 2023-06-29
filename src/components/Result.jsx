import { useContext, useState, useEffect } from "react"

import { Box, styled } from "@mui/material"

import { DataContext } from "../context/DataProvider"

const Container = styled(Box)`
  height: "50vh"
`

const Result = () => {
  // html, css and js as a result show karna hai 

  const [src, setSrc] = useState();

  const { html, css, js} = useContext(DataContext)

  // iss source code ko ham iframe ki help se display karva sakte hai 
  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `

  useEffect(() => {
    const timer = setTimeout(() => {
      setSrc(srcCode)
    }, 2000)

    return () => {
      clearTimeout(timer);
    }
  }, [html,css,js])

  return (
    <Container>
      <iframe 
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
        allowFullScreen="true"
      />
    </Container>
  )
}

export default Result