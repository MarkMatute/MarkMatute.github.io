import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import LINKS from '../constants/links';
import DefaultLayout from './_layouts/default-layout';

export default function Contact() {
  const titleRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState({
    show: false,
    error: false,
  });

  useEffect(() => {
    let typed = new Typed(titleRef.current, {
      strings: ['Contact'],
      typeSpeed: 50,
      smartBackspace: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  async function onSubmit(e: any) {
    e.preventDefault();
    const payload = {
      name,
      email,
      message,
    };
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setEmailStatus({
        show: true,
        error: false,
      });
    } else {
      setEmailStatus({
        show: true,
        error: true,
      });
    }

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <DefaultLayout>
      <div className="row mb-5 mt-5">
        <div className="col-6 mx-auto">
          <div className="card text-start">
            <div className="card-body">
              <h4 className="card-title" ref={titleRef}></h4>
              {emailStatus.show && (
                <div
                  className={`alert alert-${emailStatus.error ? 'danger' : 'success'} alert-dismissible fade ${
                    emailStatus.show ? 'show' : ''
                  }`}
                  role="alert">
                  {emailStatus.error ? (
                    <>
                      <strong>Not Sent!</strong> Try again later.
                    </>
                  ) : (
                    <>
                      <strong>Sent!</strong> Your email was sent.
                    </>
                  )}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() =>
                      setEmailStatus({
                        show: false,
                        error: false,
                      })
                    }></button>
                </div>
              )}
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    aria-describedby="name"
                    placeholder="Juan Dela Cruz"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    aria-describedby="email"
                    placeholder="juandelacruz@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Message
                  </label>
                  <textarea
                    required
                    className="form-control"
                    rows={5}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}></textarea>
                </div>
                <button type="submit" className="btn btn-outline-dark">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 mt-5 d-flex flex-row justify-content-around">
            <a className="btn btn-outline-primary" href={LINKS.LINKEDIN} role="button" target="_target">
              LinkedIn
            </a>
            <a className="btn btn-outline-primary" href={LINKS.GITHUB} role="button" target="_target">
              Github
            </a>
            <a className="btn btn-outline-primary" href={LINKS.FACEBOOK} role="button" target="_target">
              Facebook
            </a>
            <a className="btn btn-outline-primary" href={LINKS.DEVTO} role="button" target="_target">
              Dev.to
            </a>
            <a className="btn btn-outline-primary" href={LINKS.NPM} role="button" target="_target">
              NPM
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
