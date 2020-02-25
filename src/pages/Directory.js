// import React, { Component } from "react";

import React from "react";
import Header from "../components/Header";
import List from "../components/List";



const employeeArray = [
  { id: 1, empid:'111111115-3', name: 'Zena Wayne', email: 'janewayne@aaa.com', phone: '+1(775)763-8844', city: 'Austin Office', image: 'https://www.smileyhuette.de/images/smiley-facebook.png' },
  { id: 2, empid:'222555335-3', name: 'Maria Crystal', email: 'mariacrystal@aaa.com', phone: '+1(555)565-5555', city: 'Boston Office', image: 'https://i.pinimg.com/originals/cc/e8/f5/cce8f5e2ce356473c5a9eb6268d66a1d.png' },
  { id: 3, empid:'365555335-3', name: 'John Rodriguez', email: 'johnrodriguez@aaa.com', phone: '+1(775)763-8832', city: 'Austin Office' , image: 'https://npolitan.files.wordpress.com/2012/01/reminder-smiley-face1.jpg' },
  { id: 4, empid:'465786477-4', name: 'Greta Gatsby', email: 'gretagatsby@aaa.com', phone: '+1(555)555-55533', city: 'Dublin Office' , image: 'https://i.ebayimg.com/images/g/osQAAOSwbwlXBS-T/s-l300.jpg' },
  { id: 5, empid:'590086543-5', name: 'Mary Anne', email: 'maryanne@aaa.com', phone: '+1(775)763-8844', city: 'Dublin Office' , image: 'https://i.pinimg.com/736x/e1/85/21/e185219fc9115c994b26ce2e2d7c0b79--emoticon-emoji.jpg' },
  { id: 6, empid:'645653783-6', name: 'Mary Jones', email: 'marycfusilier@aaa.com', phone: '+1(555)555-5233', city: 'Dublin Office ' , image: 'http://1.bp.blogspot.com/-y6yeKESK36k/U50pXu9e5bI/AAAAAAAAJU4/Q5t0xC3HxNI/s1600/business-emoticon.png' },
  { id: 7, empid:'711467947-7', name: 'Melina Dawes', email: 'melinadawes@aaa.com', phone: '+1(555)535-5555', city: 'Paris Office' , image: 'https://i.pinimg.com/736x/04/00/d3/0400d3607a876354808bc844b44f47a2.jpg' },
  { id: 8, empid:'888645644-8', name: 'Newton Acosta', email: 'newtonacosta@aaa.com', phone: '+1(775)743-8844', city: 'Boston Office' , image: 'http://3.bp.blogspot.com/-1LnCCxHvWy0/Vo2fUMCSmII/AAAAAAAAB2w/dya0ZLKj9Jk/s1600/business-call-smiley.png' },
  { id: 9, empid:'934566566-3', name: 'Sonia do Cabo', email: 'soniacabo@aaa.com', phone: '+1(555)555-8555', city: 'Brazil Office' , image: 'https://i.pinimg.com/736x/af/ce/2b/afce2b000e96a45f09bce2c9213ed0a5--money-emoji-smiley-faces.jpg' },
  { id: 10, empid:'107433740-1', name: 'Leo do Cabo', email: 'leonardocabo@aaa.com', phone: '+1(775)773-8844', city: 'Brazil Office' , image: 'https://3.bp.blogspot.com/-_4WEj_94u_s/WHuVTWhu2QI/AAAAAAAATbQ/6m5CHrhy3fo_k7zklVmyvAitUuAUb9JnwCLcB/s1600/bow-tie-smiley.png' }  
];


function Directory() {
  return (
    <div>
      <Header />
      <List employeeArray={employeeArray} />;
    </div>
  );
}

export default Directory;
