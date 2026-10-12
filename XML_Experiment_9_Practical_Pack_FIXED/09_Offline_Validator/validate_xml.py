import sys
from lxml import etree

if len(sys.argv) != 2:
    print("Usage: py validate_xml.py path\\to\\file.xml")
    sys.exit(1)

filename = sys.argv[1]

try:
    parser = etree.XMLParser(
        dtd_validation=True,
        load_dtd=True,
        no_network=True
    )
    etree.parse(filename, parser)
    print("VALID: XML is well-formed and its DTD validation passed (if a DTD is present).")
except (etree.XMLSyntaxError, OSError) as e:
    print("INVALID XML:")
    print(e)
    sys.exit(2)
