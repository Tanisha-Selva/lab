XML EXPERIMENT 9 - PRACTICING WITH XML FORMATTERS
=================================================

This pack contains eight independent XML practical folders:
1. Basic XML
2. Internal DTD
3. External DTD
4. XML + CSS formatter
5. XML + XSLT table
6. XML + XSLT list
7. XML + XSLT report
8. Required fields and validation

The files are intentionally simple and suitable for a lab practical.

IMPORTANT XML TERMS
-------------------
Well-formed XML means the XML follows XML syntax rules:
- one root element
- properly nested elements
- every opened tag is closed
- attributes are quoted
- XML is case-sensitive

Valid XML means it is well-formed AND conforms to a declared grammar such as
a DTD.

A browser showing an XML file does NOT automatically mean that the XML has
been validated against its DTD.

OFFLINE USE
-----------
Basic XML and DTD files can be inspected offline.
CSS formatting can normally be viewed by opening the XML file directly.
Local XSLT transformation may work in some browsers, but browser security
policies can block local XSLT in some environments.

If local XSLT is blocked:
- use a small local web server if Python is installed:
      python -m http.server 8000
  from the relevant folder, then open:
      http://localhost:8000/books.xml
- or use an approved XML/XSLT validator/formatter online when internet is
  available.

ONLINE VALIDATION
-----------------
An online XML validator/formatter can be used when internet is available.
For external DTD validation, choose a validator that allows the XML and DTD
to be supplied/uploaded together. Do not assume a generic formatter performs
DTD validation.

No specific online service is required by this pack because websites and
interfaces can change.

RECOMMENDED EXAM FLOW
---------------------
1. Create/open the XML.
2. Check tags and nesting.
3. For DTD tasks, check the DOCTYPE declaration and DTD rules.
4. For CSS/XSLT tasks, keep all referenced files in the same folder.
5. Open the XML or serve the folder locally.
6. Explain that browser display is not the same as formal DTD validation.
