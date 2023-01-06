import { useForm } from "react-hook-form";
import { postProduct } from "../../Redux/action";
import { useDispatch } from "react-redux";

export default function MyForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(postProduct(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register("name")} />
        {/* {errors.name && "name is required."} */}
      </label>
      <br />
      <label>
        Image:
        <input type="text" {...register("image")} />
        {/* {errors.image && "image is required."} */}
      </label>
      <br />
      <label>
        Brand:
        <input type="text" {...register("brand")} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" {...register("price")} />
        {/* {errors.price && "Price is required."} */}
      </label>
      <br />
      <label>
        Quantity:
        <input type="text" {...register("quantity")} />
        {/* {errors.quantity && "Quantity is required."} */}
      </label>
      <br />
      <label>
        Compatible:
        <input type="text" {...register("compatible")} />
      </label>
      <br />
      <label>
        Favorites:
        <input type="text" {...register("favorites")} />
      </label>
      <br />
      <label>
        Calification:
        <input type="text" {...register("calification")} />
      </label>
      <br />
      <label>
        Comments:
        <input type="text" {...register("comments")} />
      </label>
      <br />
      <label>
        Categories:
        <input type="text" {...register("categories")} />
      </label>
      <br />
      <label>
        Description:
        <textarea type="text" {...register("description")} />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}
