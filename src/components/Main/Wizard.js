import React, { useState } from "react";

// import PageOne from "./PageOne";
// import PageTwo from './PageTwo';

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

const Wizard = () => {
  const [page, setPage] = useState(0);
  const [quote, setQuote] = useState({});

  function handleFieldChange(e) {
    const { currentTarget } = e;
    setQuote((s) => ({ ...s, [currentTarget.name]: currentTarget.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.alert(JSON.stringify(quote, 0, 2));
  }

  function next() {
    setPage((s) => s + 1);
  }

  function back() {
    setPage((s) => s - 1);
  }

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {/* {page === 0 && <PageOne values={quote} handleChange={handleFieldChange} setNextPage={next}/>} */}
        {/* {page === 1 && <PageTwo values={quote} handleChange={handleFieldChange} setNextPage={next} setBackPage={back}/>} */}
      </form>
      <pre>{JSON.stringify(quote, 0, 2)}</pre>
    </>
  );
};

export default Wizard;
