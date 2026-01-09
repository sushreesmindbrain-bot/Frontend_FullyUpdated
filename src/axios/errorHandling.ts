// import axios from "axios";

// export function httpErrorHandler(error: unknown) {
//   if (error === null) throw new Error("Unrecoverable error!! Error is null!");
//   if (axios.isAxiosError(error)) {
//     const response = error?.response;
//     const request = error?.request;
//     if (error.code === "ERR_NETWORK") {
//       console.error("Connection problems");
//     } else if (error.code === "ERR_CANCELED") {
//       console.error("Connection canceled");
//     }
//     if (response) {
//       const statusCode = response.status;
//       if (statusCode === 404) {
//         console.error(
//           "The requested resource does not exist or has been deleted"
//         );
//       } else if (statusCode === 401) {
//         console.error("Please login to access this resource");
//       } else if (statusCode === 400) {
//       } else {
        
//       }
//     } else if (request) {
//       console.error("No response from server");
//     }
//   } else {
//     console.error(error.data);
//   }
// }
import axios from "axios";

export function httpErrorHandler(error: unknown): void {
  // Null or undefined safety
  if (error == null) {
    console.error("Unrecoverable error: error is null or undefined");
    return;
  }

  // Axios error handling
  if (axios.isAxiosError(error)) {
    const { response, request, code, message } = error;

    if (code === "ERR_NETWORK") {
      console.error("Network error: Please check your internet connection");
      return;
    }

    if (code === "ERR_CANCELED") {
      console.error("Request was cancelled");
      return;
    }

    if (response) {
      const status = response.status;

      switch (status) {
        case 400:
          console.error("Bad request", response.data);
          break;
        case 401:
          console.error("Unauthorized: Please login");
          break;
        case 403:
          console.error("Forbidden: Access denied");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("Unexpected error", response.data);
      }
      return;
    }

    if (request) {
      console.error("No response received from server");
      return;
    }

    console.error("Axios error:", message);
    return;
  }

  // Non-Axios errors (safe handling)
  if (error instanceof Error) {
    console.error("Error:", error.message);
    return;
  }

  // Fallback for unknown shapes
  console.error("Unknown error:", error);
}
