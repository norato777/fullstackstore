import { useForm } from "react-hook-form";
import { postProduct } from "../../Redux/action";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";

export default function MyForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(postProduct(data));
  };

  return (
    <>
      <Header />
      <Form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <h1>Crear Producto Nuevo</h1>
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <Form.Label>
            Name:
            <Form.Control
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>name is required </p>}
          </Form.Label>

          <Form.Label>
            Image:
            <Form.Control
              type="text"
              {...register("image", { required: true })}
            />
            {errors.image?.type === "required" && <p>image is required </p>}
          </Form.Label>

          <Form.Label>
            Brand:
            <Form.Control type="text" {...register("brand")} />
          </Form.Label>
          <Form.Label>
            Price:
            <Form.Control
              type="number"
              step="0.01"
              {...register("price", { required: true })}
            />
            {errors.price?.type === "required" && <p>price is required </p>}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <Form.Label>
            Quantity:
            <Form.Control
              type="number"
              {...register("quantity", { required: true })}
            />
            {errors.quantity?.type === "required" && (
              <p>quantity is required </p>
            )}
          </Form.Label>

          <Form.Label>
            Compatible:
            <Form.Control type="text" {...register("compatible")} />
          </Form.Label>

          <Form.Label>
            Favorites:
            <Form.Control type="text" {...register("favorites")} />
          </Form.Label>

          <Form.Label>
            Calification:
            <Form.Control type="text" {...register("calification")} />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <Form.Label>
            Comments:
            <Form.Control type="text" {...register("comments")} />
          </Form.Label>

          <Form.Label>
            Categories:
            <Form.Control type="text" {...register("categories")} />
          </Form.Label>

          <Form.Label>
            Description:
            <Form.Control type="text" {...register("description")} />
          </Form.Label>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
