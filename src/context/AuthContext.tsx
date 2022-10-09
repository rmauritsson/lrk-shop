import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const AuthContext = createContext({
  currentUser: null,
});
