import React, { useEffect } from "react";
import { getCategories } from "../../Redux/action";
import NavButton from "../NavButton/NavButton";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarHeader() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !category.length && dispatch(getCategories());
  }, []);

  return (
    <>
      <Container className="mt-3 ">
        <Navbar
          style={{
            backgroundColor: "rgba(33, 37, 41,0.5)",
            backdropFilter: "blur(5px)",
            border: "1px solid #fff",
            boxShadow: "0 0 7px #fff",
          }}
          expand="lg"
          className="rounded-4 justify-content-center"
        >
          <Nav className="justify-content-center">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {category?.map((e, i) => (
                <div>
                  <NavButton prop={e} />
                </div>
              ))}
            </div>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
