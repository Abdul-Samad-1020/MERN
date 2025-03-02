import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchWithAxios = () => {
  const [post, setPost] = useState(null); // Use null for a single object
  const [loading, setLoading] = useState(true);

  const FetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/1");
      console.log(response.data); // ✅ Corrected console log
      setPost(response.data); // ✅ Set API data to state
      setLoading(false); // ✅ Correctly update loading state
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>This is My Fake Store</h1>
      <h6>API Fetching with Axios</h6>
      {
        post.map((item)=>(
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.image} alt={item.title} />
            </div>
        ))
      }
    
    </div>
  );
};

export default FetchWithAxios;
