import "./CompareTable.css";

function CompareTable() {
  return (
    <section className="compare">
      <h2>COMPARE</h2>

      <table>
        <thead>
          <tr>
            <th>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>BUSINESS</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>UNLIMITED STORY POSTING</td>
            <td>&#x2714;</td>
            <td>&#x2714;</td>
            <td>&#x2714;</td>
          </tr>

          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td></td>
            <td></td>
            <td>&#x2714;</td>
          </tr>
          <tr>
            <td>EMBEDDING CUSTOM CONTENT</td>
            <td></td>
            <td>&#x2714;</td>
            <td>&#x2714;</td>
          </tr>
          <tr>
            <td>CUSTOMIZE METADATA</td>
            <td></td>
            <td>&#x2714;</td>
            <td>&#x2714;</td>
          </tr>
          <tr>
            <td>ADVANCED METRICS</td>
            <td></td>
            <td></td>
            <td>&#x2714;</td>
          </tr>
          <tr>
            <td>PHOTO DOWNLOADS</td>
            <td></td>
            <td></td>
            <td>&#x2714;</td>
          </tr>
          <tr>
            <td>SEARCH ENGINE INDEXING</td>
            <td></td>
            <td></td>
            <td>&#x2714;</td>
          </tr>
          <tr>
            <td>CUSTOM ANALYTICS</td>
            <td></td>
            <td></td>
            <td>&#x2714;</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CompareTable;
