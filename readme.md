# Installation

1. if not already installed: `npm i -g http-server`
2.  &&
    ```
    git clone https://github.com/andrei-gheorghiu/bb-test-1.git ahg-card
    cd ahg-card && http-server
    ```
3.  open `http://localhost:8080` in any browser 

## Known issues

1. Firefox and IE do not allow native scrollbar styling. 

The only workaround is hiding the scrollbar and mocking it using actual DOM elements. There are several libraries doing it, such as: https://github.com/utatti/perfect-scrollbar 

Since the requirement was **not** to use external libraries and/or packages (and I considered writing a javascript scrolling library out of current test's scope), I left it as is. The reasonable thing here would be to use (and credit) the above package or similar.
  
