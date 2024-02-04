import React from "react";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Error 404</h1>
      <p style={styles.message}>Page Not Found!</p>
      <img
        src={require("../assets/error-404.png")}
        alt="Error 404"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    fontSize: "48px",
    color: "#333",
  },
  message: {
    fontSize: "24px",
    color: "#666",
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    height: 200,
  },
};

export default ErrorPage;
