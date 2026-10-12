<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <h2>Book Catalog Report</h2>
    <p>Total Books:
      <xsl:value-of select="count(catalog/book)"/>
    </p>
    <xsl:for-each select="catalog/book">
      <p>
        <b>Title:</b> <xsl:value-of select="title"/><br/>
        <b>Author:</b> <xsl:value-of select="author"/><br/>
        <b>Price:</b> Rs. <xsl:value-of select="price"/>
      </p>
      <hr/>
    </xsl:for-each>
  </xsl:template>
</xsl:stylesheet>
