function inverse(m) {     // Creating a function so that this inverse algorithm can be called and performend with any 3x3 matrix
  [
    [a, b, c],
    [d, e, f],
    [g, h, i]       // This is what the parameter m passed to the inverse function(the matrix) should be. it is a 3x3 matrix
  ] = m;
    let x = e * i - h * f,     // Breaking down the parts of calculation of the determinant into 3 diff sections(x,y,z) to shorten the main determinant calculation
      y = f * g - d * i,
      z = d * h - g * e,
      det = a * x + b * y + c * z;  // calculating the Determinant using the previous shorter results
    return det !== 0 ? [            // checking with a form of if statemnt if the determinant is not equal to zero, if this is true then the following code runs:

    [x, c * h - b * i, b * f - c * e],
    [y, a * i - c * g, d * c - a * f],
    [z, g * b - a * h, a * e - d * b]         
  ].map(r => r.map(v => v /= det)) : console.log(" \n This matrix does not have an inverse as the determinant is 0 , try another matrix!!");    
}                    
 
/*the transpose of the matrix C([x, c * h - b * i, b * f - c * e],  is being calculated here
                                 [y, a * i - c * g, d * c - a * f],
                                 [z, g * b - a * h, a * e - d * b] ) 
when working with two dimensional arrays we need to call two map functions as operation on internal arrays is required.
Here the code starts by creating a new array called "r" through map function.
The code then loops through current array, "r"and for each elemnt in the array it uses the "map" function. A map function takes a function as an argument. 
In this case , the function is v,it takes a value v  and divides it by the determinent " det". The code then returns new array "r " which is the result of previous steps. 
Mathematically this can be seen as M^-1=C^T/det(M)
The arrow => is a shorter way to declare a function expression. Here its used to declare the function expressions r and v which are accepted as parameters for map .
However if the statement "determinent not equal to 0" is false then a message telling that the matrix does not have an inverse is returned.*/
      

  /*  Below we can test the code using a few examples of 3x3 matrices  */
    
  const mA = [
    [6, 6, 2],
    [8, 9, 9],                              
    [9, 4, 1]
  ];
  const invA = inverse(mA);     //The inverse function above is called and mA is passed as the input matrix on which the operations that were defined are performed to 
  console.log(invA);            // produce an output inverse matrix

  const mB= [
    [1,6,4],
    [2,4,-1],
    [-1,2,5]             
  ]
  const invB = inverse(mB);   // The inverse function above is called for this input but as the determinant is 0 a message telling no inverse of the matrix is output.
  console.log(invB);
  
  


