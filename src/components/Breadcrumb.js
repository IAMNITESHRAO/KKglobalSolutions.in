// import React from "react";
// import { Link } from "react-router-dom";

// const Breadcrumb = ({ title }) => {
//   return (
//     <>
//       {/* ================ Breadcrumb Start ================*/}
//       <div
//         className='breadcrumb-area bg-cover'
//         style={{ backgroundImage: 'url("./assets/img/bg/7.png")' }}
//       >
//         <div className='container'>
//           <div className='breadcrumb-inner'>
//             <div className='row justify-content-center'>
//               <div className='col-lg-6'>
//                 <h2 className='page-title'>{title}</h2>
//               </div>
//               <div className='col-lg-6 text-lg-end'>
//                 <ul className='page-list'>
//                   <li>
//                     <Link to='/index-1'>Home</Link>
//                   </li>
//                   {"  "}/ <li>{title}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ================ Breadcrumb End ================*/}
//     </>
//   );
// };

// export default Breadcrumb;
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("./assets/img/bg/7.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className='container'>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {title}
              </h2>
            </div>

            <div style={{ flex: 1, textAlign: 'right' }}>
              <ul
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '8px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                <li>
                  <Link
                    to='/'
                    style={{
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

