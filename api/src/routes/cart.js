export default  postCart = async function (user_id, product_id) {
    try {
      
      const cart = await Cart.findOne({ user_id });
      
      if (cart) {
     
        cart.product_ids.push(product_id);
        await cart.save();
      } else {
        const newCart = new Cart({
          user_id,
          product_ids: [product_id]
        });
        await newCart.save();
      }
    } catch (error) {
      console.log(error);
    }
  }