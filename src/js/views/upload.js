import React from "react";
import { useState, useEffect, useContext } from "react";
// //import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>
