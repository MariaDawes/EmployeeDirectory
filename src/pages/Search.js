// import React, { Component } from "react";

import React, {useState} from "react";
import Headersearch from "../components/Headersearch";
import Searchform from "../components/Searchform";
import Listsearch from "../components/Listsearch";



const employeeArraysearch = [
  { id: 1, name: 'Zena Wayne', email: 'janewayne@aaa.com', phone: '(775)763-8844', city: 'Austin', image: 'https://www.smileyhuette.de/images/smiley-facebook.png' },
  { id: 2, name: 'Maria Crystal', email: 'mariacrystal@aaa.com', phone: '(555)565-5555', city: 'Boston', image: 'https://i.pinimg.com/originals/cc/e8/f5/cce8f5e2ce356473c5a9eb6268d66a1d.png' },
  { id: 3, name: 'John Rodriguez', email: 'johnrodriguez@aaa.com', phone: '(775)763-8832', city: 'Austin' , image: 'https://npolitan.files.wordpress.com/2012/01/reminder-smiley-face1.jpg' },
  { id: 4, name: 'Greta Gatsby', email: 'gretagatsby@aaa.com', phone: '(555)555-55533', city: 'Dublin' , image: 'https://i.ebayimg.com/images/g/osQAAOSwbwlXBS-T/s-l300.jpg' },
  { id: 5, name: 'Mary Anne', email: 'maryanne@aaa.com', phone: '(775)763-8844', city: 'Dublin' , image: 'https://i.pinimg.com/736x/e1/85/21/e185219fc9115c994b26ce2e2d7c0b79--emoticon-emoji.jpg' },
  { id: 6, name: 'Mary Claire Fusilier', email: 'marycfusilier@aaa.com', phone: '(555)555-5233', city: 'Dublin' , image: 'http://1.bp.blogspot.com/-y6yeKESK36k/U50pXu9e5bI/AAAAAAAAJU4/Q5t0xC3HxNI/s1600/business-emoticon.png' },
  { id: 7, name: 'Melina Dawes', email: 'melinadawes@aaa.com', phone: '(555)535-5555', city: 'Paris' , image: 'https://i.pinimg.com/736x/04/00/d3/0400d3607a876354808bc844b44f47a2.jpg' },
  { id: 8, name: 'Newton Acosta', email: 'newtonacosta@aaa.com', phone: '(775)743-8844', city: 'Boston' , image: 'http://3.bp.blogspot.com/-1LnCCxHvWy0/Vo2fUMCSmII/AAAAAAAAB2w/dya0ZLKj9Jk/s1600/business-call-smiley.png' },
  { id: 9, name: 'Sonia Cabo', email: 'soniacabo@aaa.com', phone: '(555)555-8555', city: 'Austin' , image: 'https://i.pinimg.com/736x/af/ce/2b/afce2b000e96a45f09bce2c9213ed0a5--money-emoji-smiley-faces.jpg' },
  { id: 10, name: 'Leonardo Cabo', email: 'leonardocabo@aaa.com', phone: '(775)773-8844', city: 'Austin' , image: 'https://3.bp.blogspot.com/-_4WEj_94u_s/WHuVTWhu2QI/AAAAAAAATbQ/6m5CHrhy3fo_k7zklVmyvAitUuAUb9JnwCLcB/s1600/bow-tie-smiley.png' }  
];


function Search() {

  const [thename, setThename] = useState("");
  
  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setThename(value);

  };
  
  const getFiltered = () => {
    return employeeArraysearch.filter(employee => employee.name == thename)
    }


  return (
    <div>
      <Headersearch />
      <Searchform handleInputChange={handleInputChange} />
      <Listsearch employeeArraysearch={getFiltered()} />;
    </div>
  );
}

export default Search;
