import { createGlobalStyle } from 'styled-components';
 
const MyGlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  /* direction: rtl; */
}
body {
  font-family: IRANSans;
  overflow-x: hidden;
  background: #F5F5F5;
}
a {
  color: initial;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
a,
a:hover,
a:active,
a:focus,
input:hover,
input:active,
input:focus,
button:hover,
button:visited,
button:active,
button:focus,
.form-control:focus {
  outline: none !important;
  color: inherit;
}
*:focus {
  outline: none !important;
}
input.middle:focus {
  outline-width: 0;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
  outline: 0px !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
li {
  list-style: none;
}
.image-cover {
  object-fit: cover;
  width: 100%;
  height: auto;
}
.text__black {
  color: #1e1e1e;
}
/* --------------- */
/*      LANDING    */
/* --------------- */
.sections-wrapper-landing {
  min-height: calc(100vh - 56px);
}
.dropdown-toggle::after {
  display: none;
}
/* --------------------------------- */
/*        wrapper - content          */
/* --------------------------------- */
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  width: 100%;
}
#content {
  width: 100%;
}
/* --------------------------------- */
/*             TABLE                 */
/* --------------------------------- */
table {
  border-collapse: separate;
  border-spacing: 0 6px;
}
tr td:last-child {
  border-top-left-radius: 12px !important;
  border-bottom-left-radius: 12px !important;
}
tr td:first-child {
  border-top-right-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
}
.table thead th {
  border-bottom: 0px;
}
/* -------------------------------------- */
/*             REACT SELECT               */
/* -------------------------------------- */
.select__control {
  height: 56px;
  border-radius: 12px !important;
  -moz-border-radius: 12px !important;
  -webkit-border-radius: 12px !important;
  font-size: 16px;
  line-height: 43.2px;
  color: #000033;
  font-family: IRANSans;
  border-style: Solid !important;
  border-color: #e9eaee !important;
  border-width: 1px !important;
  direction: rtl;
  text-align: right;
}
.select__placeholder {
  font-size: 14px;
  line-height: 43.2px;
  text-align: right;
  color: #aaaabb;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select__menu {
  font-size: 16px;
  line-height: 43.2px;
  color: #000033;
  background: #fff !important;
  border-radius: 0px 0px 12px 12px !important;
  -moz-border-radius: 0px 0px 12px 12px !important;
  -webkit-border-radius: 0px 0px 12px 12px !important;
  box-shadow: 4px 8px 10px rgba(28, 28, 74, 0.1) !important;
  border: none !important;
  margin-top: 0px !important;
  padding-top: 0px !important;
  z-index: 999 !important;
}
.select__control:hover:not(.select__control--is-focused) {
  border-color: #c0c7fc !important;
}
.select__control--is-focused {
  border: 1px solid #112df2 !important;
  color: #000033;
  font-weight: 500;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.select__option {
  margin: 0px !important;
  width: 100% !important;
}
.select__option:hover {
  margin: 0 12px 0 16px !important;
  width: calc(100% - 28px) !important;
}
.css-1okebmr-indicatorSeparator {
  display: none !important;
}
/* ---------------------------------- */
/*             Toastify               */
/* ---------------------------------- */
.Toastify__toast {
  width: 360px !important;
  min-height: 46px !important;
  border-radius: 12px !important;
  -moz-border-radius: 12px !important;
  -webkit-border-radius: 12px !important;
  box-shadow: none !important;
  font-family: IRANSans;
  direction: rtl !important;
}
.Toastify__toast-icon {
  display: none;
}
.Toastify__close-button {
  margin: 5px 0 0 5px;
  color: #fff !important;
  opacity: 1 !important;
}
.Toastify__toast-body {
  padding-top: 5px !important;
  font-size: 14px;
  color: #ffffff;
  font-family: IRANSans !important;
  text-align: right !important;
}
.Toastify__toast--error {
  background: #e2445c;
  box-shadow: 2px 6px 10px rgba(226, 68, 92, 0.5) !important;
}
.Toastify__toast--success {
  background: #00c875;
  box-shadow: 2px 6px 10px rgba(0, 200, 117, 0.5) !important;
}
.Toastify__toast--warning {
  background: #fdab3d;
  box-shadow: 2px 6px 10px rgba(253, 171, 61, 0.5) !important;
}
@media screen and (max-width: 500px) {
  .Toastify__toast {
    width: 328px !important;
    margin: 24px auto;
  }
}
`;
 
export default MyGlobalStyle;