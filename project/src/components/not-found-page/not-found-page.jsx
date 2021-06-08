import React from 'react';
import Header from '../header/header';

function NotFoundPage() {

  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main">
        <div className="container">
          <h1>404 Not Found</h1>
        </div>
      </main>

    </div>
  );
}

export default NotFoundPage;
