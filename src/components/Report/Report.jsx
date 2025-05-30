import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";

const Report = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">گزارش</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>

      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="chart-vert-value">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          {reportData.map((report) => (
            <div className="grid-chart-bar" key={report.id}>
              <div className="bar-wrapper">
                {report.value1 !== null && (
                  <div
                    className="bar-item1"
                    style={{ height: `${report.value1}%` }}
                  ></div>
                )}

                {report.value2 !== null && (
                  <div
                    className="bar-item2"
                    style={{ height: `${report.value2}%` }}
                  ></div>
                )}
              </div>

              <span className="grid-hortz-value">{report.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
