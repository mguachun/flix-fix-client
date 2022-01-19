import React, { useEffect, useState, setLoading } from "react";
function Home() {
  const [state, setState] = useState([])
  const [hasError, setHasError] = useState(false)
  const { loading, setLoading } = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/movies").then(
      res => {
        setState(res.data);
        setLoading(false)}
    ).catch(err => {
      setHasError(true)
      setLoading(false)
    })
  }, [url])

  return (
    <>
    {
      loading ? <div>Loading...</div> : hasError ? <div>Error occured.</div>
      : (state.map( d => <div>{d}</div>))
    }
    </>
  )
}

export default Home;