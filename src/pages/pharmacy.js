import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
import { Search } from "react-bootstrap-icons"

class SearchExample extends React.Component {
  state = { searchString: "" }
  handleChange = e => {
    this.setState({ searchString: e.target.value })
  }
  render() {
    var libraries = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase()
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString)
      })
    }
    return (
      <Layout>
        <div className="container text-center py-5">
          <h2 className="pb-2 border-bottom text-center">Pharmacy</h2>

          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search for Medicine"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={this.state.searchString}
              onChange={this.handleChange}
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              <Search />
            </button>
          </div>

          <div className="row justify-content-center py-5">
            {libraries.map(function (i) {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card card-body shadow mb-4">
                    <Image
                      className="d-block mx-lg-auto img-fluid"
                      style={{
                        margin: "0 auto",
                        height: "200px",
                        width: "200px",
                      }}
                      filename={`${i.image}.jpg`}
                      alt="1"
                    />
                    <h5 className="fw-bold py-2">{i.name}</h5>
                    <h5 className="text-danger">{i.price}</h5>
                    <p className="text-muted">Expiry: {i.expiry}</p>
                    <button className="btn btn-info">Add to Cart</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

var libraries = [
  { image: "pharmacy1", name: "Crocin", price: " MRP- Rs 100", expiry: "12/23" },
  // { image: "pharmacy2", name: "Paracetamol", price: "MRP- Rs 200", expiry: " 15/22" },
  { image: "pharmacy3", name: "Antacids", price: "MRP- Rs 50", expiry: "1/22" },
  {
    image: "pharmacy4",
    name: "Antiseptic cream",
    price: "MRP- Rs 100",
    expiry: "18/23",
  },
  { image: "pharmacy5", name: "Alosetron", price: "MRP- Rs 200", expiry: "12/23" },
  //{ image: "pharmacy6", name: "Pan-D", price: "Rs 70", expiry: "1 year" },
  { image: "pharmacy7", name: "Cotton", price: "MRP- Rs 90", expiry: "20/22" },
  {
    image: "pharmacy8",
    name: "Sanitary Pads",
    price: "MRP- Rs 299",
    expiry: "11/24",
  },
  { image: "pharmacy9", name: "Dettol", price: " MRP- Rs 70", expiry: "08/22" },
  //{ image: "pharmacy10", name: "Horlicks", price: "Rs 175", expiry: "1 year" },
  { image: "pharmacy11", name: "Mucinex", price: "MRP- Rs 36", expiry: "09/23" },
  { image: "pharmacy12", name: "Benadryl", price: "MRP- Rs 112", expiry: "07/25" },
  // { image: "pharmacy13", name: "Glucose Monitoring", price: "Rs 6000", expiry: "1 year" },
  //{ image: "pharmacy14", name: "RTPCR Kit", price: "Rs 200", expiry: "1 year" },
  { image: "pharmacy15", name: "Band-aid", price: "MRP- Rs 190", expiry: "18/23" },
  {
    image: "pharmacy16",
    name: "Baby Diapers",
    price: "MRP- Rs 155",
    expiry: "08/23",
  },
  { image: "pharmacy17", name: "Diazen", price: "MRP- Rs 20", expiry: "09/22" },
  { image: "pharmacy18", name: "ENO", price: "MRP- Rs 399", expiry: "10/22" },
  { image: "pharmacy19", name: "ORS", price: "MRP- Rs 3.71", expiry: "01/24" },
  { image: "pharmacy20", name: "Glocon D", price: "MRP- Rs 152", expiry: "05/23" },
  { image: "pharmacy21", name: "Mask", price: "MRP- Rs 28.99", expiry: "11/25" },
  { image: "pharmacy22", name: "Senitizer", price: "MRP- Rs 35", expiry: "09/24" },
  { image: "pharmacy23", name: "Move", price: "MRP- Rs 101", expiry: "11/23" },
  { image: "pharmacy24", name: "Vicks", price: "MRP- Rs 20", expiry: "07/24" },
  { image: "pharmacy26", name: "Complan", price: "MRP- Rs 175", expiry: "06/25" },
]

const Pharmacy = () => {
  return <SearchExample items={libraries} />
}

export default Pharmacy
