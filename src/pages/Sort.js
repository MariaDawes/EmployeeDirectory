// import React, { Component } from "react";

import React from "react";
import Headersort from "../components/Headersort";
import Listsort from "../components/Listsort";



const employeeArraysort = [
  { id: 1, name: 'Anne Wayne', email: 'janewayne@aaa.com', phone: '(775)763-8844', city: 'Austin', image: 'http://www.businessnewsdaily.com/images/i/000/004/577/original/female-executive.jpg?interpolation=lanczos-none&fit=around%7C300:200&crop=300:200;*,*' },
  { id: 2, name: 'Maria Crystal', email: 'mariacrystal@aaa.com', phone: '(555)565-5555', city: 'Boston', image: 'https://irp-cdn.multiscreensite.com/6f9f0abd/dms3rep/multi/tablet/business%20woman-face-600x450.jpg' },
  { id: 3, name: 'John Rodriguez', email: 'johnrodriguez@aaa.com', phone: '(775)763-8832', city: 'Austin' , image: 'https://www.intheblack.com/~/media/intheblack/allimages/inpractice/2017/man-mask-happy-sad-face.jpg' },
  { id: 4, name: 'Greta Gatsby', email: 'gretagatsby@aaa.com', phone: '(555)555-55533', city: 'Dublin' , image: 'http://media.buzzle.com/media/images-en/gallery/womens-fashion/eyeglass/900-178797762-business-woman-with-eyeglasses.jpg' },
  { id: 5, name: 'Mary Anne', email: 'maryanne@aaa.com', phone: '(775)763-8844', city: 'Dublin' , image: 'https://i.insider.com/532b5a70eab8eaac3566aa77' },
  { id: 6, name: 'Mary Claire Fusilier', email: 'marycfusilier@aaa.com', phone: '(555)555-5233', city: 'Dublin' , image: 'https://www.businessfirstonline.co.uk/wp-content/uploads/2018/07/15-Denise-Hamill-300x200.jpg' },
  { id: 7, name: 'Melina Dawes', email: 'melinadawes@aaa.com', phone: '(555)535-5555', city: 'Paris' , image: 'https://www.castanet.net/content/2020/2/eqha3hiwoaanuhl._p3439176.jpg' },
  { id: 8, name: 'Newton Acosta', email: 'newtonacosta@aaa.com', phone: '(775)743-8844', city: 'Boston' , image: 'https://www.equipe-gagnante.com/wp-content/uploads/2014/08/smiling_businessman.jpg' },
  { id: 9, name: 'Sonia Cabo', email: 'soniacabo@aaa.com', phone: '(555)555-8555', city: 'Austin' , image: 'https://il5.picdn.net/shutterstock/videos/3374021/thumb/2.jpg' },
  { id: 10, name: 'Leonardo Cabo', email: 'leonardocabo@aaa.com', phone: '(775)773-8844', city: 'Austin' , image: 'https://i.pinimg.com/736x/42/77/22/4277220bfaf2d8fa00b2efda2e690f5e--smiley-facebook-symbols-emoticons.jpg' }  
];



function compare (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

employeeArraysort.sort(compare);
  

function Sort() {

  return (
    <div>
      <Headersort />
      <Listsort employeeArraysort={employeeArraysort} />;
    </div>
  );
}

export default Sort;
