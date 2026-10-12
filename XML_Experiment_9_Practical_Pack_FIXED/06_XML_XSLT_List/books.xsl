<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <h2>Book List</h2>
    <ul>
      <xsl:for-each select="catalog/book">
        <li>
          <xsl:value-of select="title"/>
          -
          <xsl:value-of select="author"/>
          -
          Rs. <xsl:value-of select="price"/>
        </li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
