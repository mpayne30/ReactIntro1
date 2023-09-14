// Header.js
                      import React from 'react';
                      import logoConstruction from './resources/logoConstruction.png';

                      function Header() {
                          return (
                              <header>
                                  <img src={logoConstruction} alt="Logo Image" />
                                  <h1>Construction Project Management</h1>
                                  <p>We are here to build your dreams. We manage construction projects from deck repair to full home build. Let us help you live your dream.</p>
                              </header>
                          )
                      }

                      export default Header;