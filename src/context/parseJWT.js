function parseJwt(token) {
    // Split the JWT into its parts: header, payload, and signature
    if (token && token !=='undefined') {
      const parts = token.split(".");
  
      if (parts.length !== 3) {
        throw new Error("JWT does not have 3 parts");
      }
  
      // Decode base64url to base64
      const base64UrlDecode = (base64Url) => {
        let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        // Pad the base64 string if necessary
        while (base64.length % 4 !== 0) {
          base64 += "=";
        }
        return atob(base64);
      };
  
      // Parse JSON from base64 decoded string
      const parseBase64Url = (base64Url) => {
        const jsonString = base64UrlDecode(base64Url);
        return JSON.parse(jsonString);
      };
  
      // Decode header and payload
      const header = parseBase64Url(parts[0]);
      const payload = parseBase64Url(parts[1]);
  
      if (payload) {
        if (payload.authorities.includes("ADMIN")) {
          payload.authorities = "admin";
        } else if (payload.authorities.includes("USER")) {
          payload.authorities = "user";
        }
      }
  
      // console.log(payload);
      return payload;
    }
    return null;
  }
  
  export default parseJwt;