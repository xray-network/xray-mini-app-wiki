import { Row, Col } from "antd"
import classNames from "classnames"
import Text from "@/components/informers/Text"
import style from "./style.module.css"

const StatsTokenMintParams = () => {
  return (
    <div>
      <p>
        The XRAY token is designed with a set of parameters that define its utility, distribution, and governance
        capabilities. These parameters are crucial for maintaining the integrity and functionality of the XRAY/Network
        ecosystem.
      </p>
      <div className="xray-container pb-4">
        <Row gutter={24}>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>Total Cap</div>
              <div className={style.sectionAmount}>
                <span className="font-size-36">324,922,240 XRAY</span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>
                <i className="xi xi-shield_check me-2" /> Locked
              </div>
              <div className="font-size-14 text-muted lh-15">
                The XRAY token is a non-inflationary cryptocurrency, meaning no new tokens will be created after the
                initial minting
              </div>
            </div>
          </Col>
        </Row>
        <div className="xray-line xray-line-dashed mb-4" />
        <Row gutter={24}>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>Policy ID</div>
              <div className="text-wrap-letters text-mono pe-5">
                <Text
                  value={<strong>86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143</strong>}
                  copy={"86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143"}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>Fingerprint</div>
              <div className="text-wrap-letters text-mono pe-5">
                <Text
                  value={<strong>asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx</strong>}
                  copy={"asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx"}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="xray-line xray-line-dashed mb-4" />
        <Row gutter={24}>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>
                <span className={classNames(style.icon, style.iconSuccess)} /> Community (Stage 1) — 56.56%
              </div>
              <div className={style.sectionAmount}>183,777,555 XRAY</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>
                <span className={classNames(style.icon, style.iconSuccess)} /> Community (Stage 2) — 15.44%
              </div>
              <div className={style.sectionAmount}>50,145,921 XRAY</div>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>
                <span className={classNames(style.icon, style.iconPrimary)} /> Dev & Marketing Fund — 18%
              </div>
              <div className={style.sectionAmount}>58,506,540 XRAY</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className={style.section}>
              <div className={style.sectionTitle}>
                <span className={classNames(style.icon, style.iconOrange)} /> Founders Fund — 10%
              </div>
              <div className={style.sectionAmount}>32,492,224 XRAY</div>
            </div>
          </Col>
        </Row>
        <div className="xray-line xray-line-dashed mb-3" />
        <div className={style.section}>
          <div className={style.sectionTitle}>Distribution Breakdown</div>
          <div className={style.chart}>
            <div className={style.chartOne}>56.56%</div>
            <div className={style.chartTwo}>15.44%</div>
            <div className={style.chartThree}>18%</div>
            <div className={style.chartFour}>10%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsTokenMintParams
