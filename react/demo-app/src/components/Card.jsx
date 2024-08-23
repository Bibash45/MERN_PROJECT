import React from 'react'

const Card = () => {
  return (
    <>
      <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4  g-4">
  <div className="col">
    <div className="card">
      <img src="/images/img1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/img2.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/img3.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/img4.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Card
