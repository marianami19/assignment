import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../Home.scss";

function FeaturedProds() {
  const products = {
    women: {
      dress: [
        {
          id: 1,
          pic: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80",
          title: "Red dress",
          price: "2499",
          description: "Made with silk.",
        },
        {
          id: 2,
          pic: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Kaftan",
          price: "1599",
          description: "Pure Cotton.",
        },
        {
          id: 3,
          pic: "https://images.unsplash.com/photo-1570382667048-23b581258f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          title: "Summer dress",
          price: "799",
          description: "Flowy",
        },
        {
          id: 4,
          pic: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80ess",
          title: "White dress with belt",
          price: "999",
          description: "Shirt Dress",
        },
      ],
      pants: [
        {
          id: 5,
          pic: "https://images.unsplash.com/photo-1592595293637-8557fa6d3c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
          title: "Blue jeans",
          price: "2499",
          description: "High waist",
        },
        {
          id: 6,
          pic: "https://images.unsplash.com/photo-1600219823854-f3bfee26ea9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
          title: "Cargo pants",
          price: "999",
          description: "With metallic belt",
        },
        {
          id: 7,
          pic: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Pink Joggers",
          price: "899",
          description: "With front pockets",
        },
        {
          id: 8,
          pic: "https://images.unsplash.com/photo-1583238630782-44f48b2e6bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          title: "Black skinny jeans",
          price: "1599",
          description: "Black skinny jeans",
        },
      ],
      skirts: [
        {
          id: 9,
          pic: "https://images.unsplash.com/photo-1534445538923-ab38438550d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Flowy geometrical skirt",
          price: "999",
          description: "Premium elastic band",
        },
        {
          id: 10,
          pic: "https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Grey skirt",
          price: "599",
          description: "Front buttoned",
        },
        {
          id: 11,
          pic: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Basic black skirt",
          price: "799",
          description: "With tie at the waistband",
        },
        {
          id: 12,
          pic: "https://images.unsplash.com/photo-1619627826693-8b40c611ca59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80",
          title: "Blue velvet mini skirt",
          price: "1299",
          description: "buttoned skirt",
        },
      ],
    },
    men: {
      shirts: [
        {
          id: 13,
          pic: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Dark blue shirt",
          price: "999",
          description: "Cotton shirt with polka dots",
        },
        {
          id: 14,
          pic: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Light blue shirt",
          price: "1399",
          description: "Dry clean only",
        },
        {
          id: 16,
          pic: "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Casual white Tee",
          price: "699",
          description: "Viscose With front pockets",
        },
        {
          id: 17,
          pic: "https://images.unsplash.com/photo-1582023617394-9f99138316af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
          title: "Checkered shirt",
          price: "499",
          description: "Roll up sleeves",
        },
      ],
      pants: [
        {
          id: 18,
          pic: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Black skinny fit",
          price: "1299",
          description: "Cotton and viscose",
        },
        {
          id: 19,
          pic: "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          title: "White pants",
          price: "1199",
          description: "Belt included",
        },
        {
          id: 20,
          pic: "https://images.unsplash.com/photo-1633323067535-aa705b2724ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Blue skinny jeans",
          price: "999",
          description: "Faded blue",
        },
        {
          id: 21,
          pic: "https://images.unsplash.com/photo-1625178551411-62eea1351c82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Beige Pants",
          price: "899",
          description: "Cotton",
        },
      ],
      hoodies: [
        {
          id: 26,
          pic: "https://images.unsplash.com/photo-1617387985131-a56c042f7d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          title: "Black hoodie",
          price: "599",
          description: "Vans",
        },
        {
          id: 27,
          pic: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "White hoodie",
          price: "899",
          description: "Black stripes",
        },
        {
          id: 28,
          pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
          title: "Zipper hoodies",
          price: "999",
          description: "Black leather",
        },
        {
          id: 29,
          pic: "https://images.unsplash.com/photo-1514415959856-84514e035ce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Orange hoodie",
          price: "1299",
          description: "Logo graphic embroidery",
        },
      ],
    },
    girls: {
      clothes: [
        {
          id: 30,
          pic: "https://images.unsplash.com/photo-1487033858121-f6f74a05c1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          title: "Printed skirt and top set",
          price: "399",
          description: "Colorful stripes",
        },
        {
          id: 31,
          pic: "https://images.unsplash.com/photo-1578897367107-2828e351c8a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          title: "Bright red dress",
          price: "600",
          description: "Frills and puffs Dry clean only",
        },
        {
          id: 32,
          pic: "https://images.unsplash.com/photo-1519457851-06c11d8bfadc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          title: " white Top",
          price: "200",
          description: "Girl Power",
        },
        {
          id: 33,
          pic: "https://images.unsplash.com/photo-1529534562303-8f0c925536e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80",
          title: "Wonder Woman dress",
          price: "399",
          description: "Soft cotton",
        },
      ],
    },
    boys: {
      clothes: [
        {
          id: 34,
          pic: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80",
          title: "Tracksuit",
          price: "499",
          description: "Zipped",
        },
        {
          id: 35,
          pic: "https://images.unsplash.com/photo-1541015492536-31d513c59861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Dungaree",
          price: "500",
          description: "jeans",
        },
        {
          id: 36,
          pic: "https://images.unsplash.com/photo-1529756148791-fbca69bfe693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Star wars hoodie",
          price: "500",
          description: "Blue",
        },
        {
          id: 37,
          pic: "https://images.unsplash.com/photo-1543854704-2b1b011701e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Checkered shirt",
          price: "399",
          description: "Ochre Roll up sleeves",
        },
      ],
    },
  };
  var selectedCategory = [];
  var allproducts = products.men.shirts.concat(
    products.men.pants,
    products.men.hoodies,
    products.women.pants,
    products.women.dress,
    products.women.skirts,
    products.boys.clothes,
    products.girls.clothes
  );
  let index = Math.floor(Math.random() * allproducts.length);
  selectedCategory = allproducts[index];
  return (
    <div className="card text-center">
      <img
        src={selectedCategory["pic"]}
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body">
        <h5 className="card-title">{selectedCategory["title"]}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          $ {selectedCategory["price"]}
        </h6>
        <p className="card-text">{selectedCategory["description"]}</p>
        <a className="btn btn-primary cart">
          <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
        </a>
      </div>
    </div>
  );
}

export default FeaturedProds;
