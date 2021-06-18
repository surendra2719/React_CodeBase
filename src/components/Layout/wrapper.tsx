import { Container } from "react-bootstrap"
const Wrapper = ({ children }:{children:any}) => (
  <>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {children}
      </div>
    </Container>
  </>
);
export default Wrapper;

