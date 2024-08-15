import './bootstrap.min.css';

function App() {
  return (
    <>
      <div className="page-container">
        <div
          className="page-content"
          style={{ marginTop: '5px', marginLeft: '5px', marginRight: '25px' }}
        >
          <div className="main-wrapper">
            <div className="row">
              <div className="col-12 col-xl-12 stretch-card">
                <div className="row flex-grow">
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-baseline">
                          <h6 className="card-title mb-0 data-card-info">
                            合同模板
                          </h6>
                          <div className="dropdown mb-2">
                            <button
                              className="btn p-0"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="icon-lg text-muted pb-3px"
                                data-feather="more-horizontal"
                              ></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="eye"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">View</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="edit-2"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="trash"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Delete</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="printer"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Print</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="download"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-6 col-md-12 col-xl-7"
                            style={{ display: 'inline' }}
                          >
                            <h3 className="mb-2 flex data-card-data">
                              58
                              <span
                                className="d-flex align-items-baseline"
                                // style="font-size: 14px; line-height: 33px;margin-left: 8px;"
                              >
                                个
                              </span>
                            </h3>
                            <div className="d-flex align-items-baseline">
                              即将到期 3 个 &nbsp; 更新 43 个 <br /> 待发布 12
                              个
                            </div>
                          </div>
                          <div className="col-6 col-md-12 col-xl-5">
                            <div
                              id="apexChart1"
                              className="mt-md-3 mt-xl-0"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-baseline">
                          <h6 className="card-title mb-0 data-card-info">
                            合同风险
                          </h6>
                          <div className="dropdown mb-2">
                            <button
                              className="btn p-0"
                              type="button"
                              id="dropdownMenuButton1"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="icon-lg text-muted pb-3px"
                                data-feather="more-horizontal"
                              ></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="eye"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">View</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="edit-2"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="trash"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Delete</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="printer"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Print</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="download"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 col-md-12 col-xl-7">
                            <h3 className="mb-2 flex">
                              65
                              <span
                                className="d-flex align-items-baseline"
                                // style="font-size: 14px; line-height: 33px;margin-left: 8px;"
                              >
                                个
                              </span>
                            </h3>
                            <div className="d-flex align-items-baseline">
                              资信类 13 个 &nbsp; 管理类 8 个 <br /> 业务类 12
                              个 &nbsp; 法务类 3 个
                              {/* <p className="text-success">
                          <span>上报 33 件</span>
                          <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                        </p> */}
                            </div>
                          </div>
                          <div className="col-6 col-md-12 col-xl-5">
                            <div
                              id="apexChart2"
                              className="mt-md-3 mt-xl-0"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-baseline">
                          <h6 className="card-title mb-0 data-card-info">
                            合同诉讼
                          </h6>
                          <div className="dropdown mb-2">
                            <button
                              className="btn p-0"
                              type="button"
                              id="dropdownMenuButton2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="icon-lg text-muted pb-3px"
                                data-feather="more-horizontal"
                              ></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="eye"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">View</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="edit-2"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="trash"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Delete</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="printer"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Print</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="download"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 col-md-12 col-xl-6">
                            <h3 className="mb-2 flex">
                              43
                              <span
                                className="d-flex align-items-baseline"
                                // style="font-size: 14px; line-height: 33px;margin-left: 8px;"
                              >
                                件
                              </span>
                            </h3>
                            <div className="d-flex align-items-baseline">
                              上报 13 个 &nbsp; 调解 3 个 <br /> 诉讼 12 个
                              &nbsp; 结案 5 个
                              {/* <!-- <p className="text-success">
                          <span>上报 33 件</span>
                          <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                        </p> --> */}
                            </div>
                          </div>
                          <div className="col-6 col-md-12 col-xl-6">
                            <div
                              id="apexChart3"
                              className="mt-md-3 mt-xl-0"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-baseline">
                          <h6 className="card-title mb-0 data-card-info">
                            用印合同
                          </h6>
                          <div className="dropdown mb-2">
                            <button
                              className="btn p-0"
                              type="button"
                              id="dropdownMenuButton2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                className="icon-lg text-muted pb-3px"
                                data-feather="more-horizontal"
                              ></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="eye"
                                  className="icon-sm mr-2"
                                ></i>
                                <span className="">View</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="edit-2"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="trash"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Delete</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="printer"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Print</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i
                                  data-feather="download"
                                  className="icon-sm mr-2"
                                ></i>{' '}
                                <span className="">Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 col-md-12 col-xl-6">
                            <h3 className="mb-2 flex">
                              128
                              <span
                                className="d-flex align-items-baseline"
                                // style="font-size: 14px; line-height: 33px;margin-left: 8px;"
                              >
                                份
                              </span>
                            </h3>
                            <div className="d-flex align-items-baseline">
                              集团总部 52 份 <br /> 下属分子公司 76 份 <br />
                              {/* <!-- <p className="text-success">
                          <span>待用印 52</span>
                          <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                        </p> --> */}
                            </div>
                          </div>
                          <div className="col-6 col-md-12 col-xl-6">
                            <div
                              id="apexChart4"
                              className="mt-md-3 mt-xl-0"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-sm-6 col-md-4 col-xl-3">
                <a
                  href="https://weapp.eteams.cn/sp/ebdfpage/card/0/825551246343045124/880476116874772480/825551246343046545"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card"
                    // style={{ height: '830px' }}
                  >
                    <div className="card-head">
                      <img
                        className="tag"
                        src="./assets/images/tag.png"
                        alt=""
                      />
                      <div className="card-title-txt my-4">我的待办</div>
                    </div>
                    <div className="card-body p-0">
                      <div className="contract-portal-customList-body mx-30">
                        <div className="contract-portal-customList-content">
                          <div className="contract-portal-todo-item">
                            <div className="contract-portal-todo-item-title">
                              <div className="contract-portal-todo-item-tag">
                                审批
                              </div>
                              <div className="contract-portal-todo-item-name">
                                【演示】维森集团采购合同
                              </div>
                            </div>
                            <div className="contract-portal-todo-item-type">
                              <span>一般采购合同</span>
                              <span className="contract-portal-element-line"></span>
                              <span>JCD-CG-23070158</span>
                            </div>
                            <div className="contract-portal-todo-item-user">
                              <span>申请人：</span>
                              <span>刘俊【演示账号】</span>
                              <span className="contract-portal-element-line"></span>
                              <span>今承达——上海</span>
                            </div>
                            <div className="contract-portal-todo-item-amount">
                              <span>合同金额：</span>
                              <span>308,800元</span>
                            </div>
                            <div className="contract-portal-todo-item-date">
                              <span className="ui-icon ui-icon-wrapper">
                                <svg
                                  className="ui-icon-xxs ui-icon-svg Icon-time02"
                                  fill="currentColor"
                                >
                                  <use xlinkHref="#Icon-time02"></use>
                                </svg>
                              </span>
                              <span>到达时间：</span>
                              <span>2023-07-03 13:48(3小时前)</span>
                            </div>
                          </div>
                          <div className="contract-portal-todo-item">
                            <div className="contract-portal-todo-item-title">
                              <div className="contract-portal-todo-item-tag">
                                审批
                              </div>
                              <div className="contract-portal-todo-item-name">
                                绿地集团采购合同
                              </div>
                            </div>
                            <div className="contract-portal-todo-item-type">
                              <span>一般采购合同</span>
                              <span className="contract-portal-element-line"></span>
                              <span>JCD-CG-23060152</span>
                            </div>
                            <div className="contract-portal-todo-item-user">
                              <span>申请人：</span>
                              <span>刘俊【演示账号】</span>
                              <span className="contract-portal-element-line"></span>
                              <span>今承达——上海</span>
                            </div>
                            <div className="contract-portal-todo-item-amount">
                              <span>合同金额：</span>
                              <span>268,000元</span>
                            </div>
                            <div className="contract-portal-todo-item-date">
                              <span className="ui-icon ui-icon-wrapper">
                                <svg
                                  className="ui-icon-xxs ui-icon-svg Icon-time02"
                                  fill="currentColor"
                                >
                                  <use xlinkHref="#Icon-time02"></use>
                                </svg>
                              </span>
                              <span>到达时间：</span>
                              <span>2023-06-16 12:46(17天前)</span>
                            </div>
                          </div>
                          <div className="contract-portal-todo-item">
                            <div className="contract-portal-todo-item-title">
                              <div className="contract-portal-todo-item-tag">
                                审批
                              </div>
                              <div className="contract-portal-todo-item-name">
                                蒙牛乳业集团采购合同
                              </div>
                            </div>
                            <div className="contract-portal-todo-item-type">
                              <span>一般采购合同</span>
                              <span className="contract-portal-element-line"></span>
                              <span>JCD-CG-23060151</span>
                            </div>
                            <div className="contract-portal-todo-item-user">
                              <span>申请人：</span>
                              <span>刘俊【演示账号】</span>
                              <span className="contract-portal-element-line"></span>
                              <span>今承达——上海</span>
                            </div>
                            <div className="contract-portal-todo-item-amount">
                              <span>合同金额：</span>
                              <span>330000元</span>
                            </div>
                            <div className="contract-portal-todo-item-date">
                              <span className="ui-icon ui-icon-wrapper">
                                <svg
                                  className="ui-icon-xxs ui-icon-svg Icon-time02"
                                  fill="currentColor"
                                >
                                  <use xlinkHref="#Icon-time02"></use>
                                </svg>
                              </span>
                              <span>到达时间：</span>
                              <span>2023-06-15 14:23(18天前)</span>
                            </div>
                          </div>
                          <div className="contract-portal-todo-item">
                            <div className="contract-portal-todo-item-title">
                              <div className="contract-portal-todo-item-tag">
                                审批
                              </div>
                              <div className="contract-portal-todo-item-name">
                                维森集团销售合同
                              </div>
                            </div>
                            <div className="contract-portal-todo-item-type">
                              <span>一般采购合同</span>
                              <span className="contract-portal-element-line"></span>
                              <span>JCD-CG-23060147</span>
                            </div>
                            <div className="contract-portal-todo-item-user">
                              <span>申请人：</span>
                              <span>刘俊【演示账号】</span>
                              <span className="contract-portal-element-line"></span>
                              <span>今承达——上海</span>
                            </div>
                            <div className="contract-portal-todo-item-amount">
                              <span>合同金额：</span>
                              <span>0元</span>
                            </div>
                            <div className="contract-portal-todo-item-date">
                              <span className="ui-icon ui-icon-wrapper">
                                <svg
                                  className="ui-icon-xxs ui-icon-svg Icon-time02"
                                  fill="currentColor"
                                >
                                  <use xlinkHref="#Icon-time02"></use>
                                </svg>
                              </span>
                              <span>到达时间：</span>
                              <span>2023-06-07 17:05(26天前)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-6">
                <div className="card" style={{ height: '830px' }}>
                  <div className="card-head">
                    <img className="tag" src="./assets/images/tag.png" alt="" />
                    <div className="card-title-txt my-4">法务日历</div>
                  </div>
                  <div className="card-body">
                    <div id="calendar"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card stat-widget" id="fast-library-query">
                  <div className="card-head">
                    <img className="tag" src="./assets/images/tag.png" alt="" />
                    <div className="card-title-txt my-4">快捷库查询</div>
                  </div>
                  <div
                    className="card-body"
                    // style="padding-left: 3.3vw;"
                  >
                    <div
                      className="transactions-list inline-flex"
                      style={{ width: '100%' }}
                    >
                      <a
                        href="https://weapp.eteams.cn/sp/contract/template-library"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="tr-item">
                          <div className="tr-company-name">
                            <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                              <img
                                src="./assets/images/mubanku.png"
                                alt=""
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="tr-text">
                              <h4>模板库</h4>
                              {/* <!-- <p>模板库描述</p> --> */}
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://weapp.eteams.cn/sp/contract/terms-library"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="tr-item">
                          <div className="tr-company-name">
                            {/* <!-- tr-card-bg-secondary --> */}
                            <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                              <img
                                src="./assets/images/tiaokuanku.png"
                                alt=""
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="tr-text">
                              <h4>条款库</h4>
                              {/* <!-- <p>条款库描述</p> --> */}
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <div className="tr-item">
                          <div className="tr-company-name">
                            <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                              <img
                                src="./assets/images/panliku.png"
                                alt=""
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="tr-text">
                              <h4>判例库</h4>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className="transactions-list inline-flex"
                      style={{ marginBottom: '10px' }}
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <div className="tr-item">
                          <div className="tr-company-name">
                            <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                              <img
                                src="./assets/images/faguiku.png"
                                alt=""
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="tr-text">
                              <h4>法规库</h4>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <div className="tr-item">
                          <div className="tr-company-name">
                            <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                              <img
                                src="./assets/images/zhengzhaoku.png"
                                alt=""
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="tr-text">
                              <h4>证照库</h4>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <div className="tr-item">
                          <div className="tr-company-name">
                            <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                              <img
                                src="./assets/images/shangbiaoku.png"
                                alt=""
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="tr-text">
                              <h4>商标库</h4>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card stat-widget law-issue">
                  <div className="card-head">
                    <img className="tag" src="./assets/images/tag.png" alt="" />
                    <div className="card-title-txt my-4">法务事项提醒</div>
                  </div>
                  <div className="card-body">
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                            <img
                              src="./assets/images/zhoubao.png"
                              alt=""
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div className="tr-text">
                            <h4>周报提醒</h4>
                            <p>刘俊2023年7月第一周工作周报未提交</p>
                          </div>
                        </div>
                        <div className="tr-rate">
                          <p>
                            <span className="text-black">8</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                            <img
                              src="./assets/images/muban.png"
                              alt=""
                              // style="width: 100%;"
                            />
                          </div>
                          <div className="tr-text">
                            <h4>模板提醒</h4>
                            <p>采购类合同模板审查未通过</p>
                          </div>
                        </div>
                        <div className="tr-rate">
                          <p>
                            <span className="text-black">6</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                            <img
                              src="./assets/images/huodong.png"
                              alt=""
                              // style="width: 100%;"
                            />
                          </div>
                          <div className="tr-text">
                            <h4>活动提醒</h4>
                            <p>维森集团上海分公司借贷咨询合同</p>
                          </div>
                        </div>
                        <div className="tr-rate">
                          <p>
                            <span className="text-black">3</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                            <img
                              src="./assets/images/kaiting.png"
                              alt=""
                              // style="width: 100%;"
                            />
                          </div>
                          <div className="tr-text">
                            <h4>开庭</h4>
                            <p>借贷咨询纠纷案件10月2日开庭</p>
                          </div>
                        </div>
                        <div className="tr-rate">
                          <p>
                            <span className="text-black">1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                            <img
                              src="./assets/images/zhengzhao.png"
                              alt=""
                              // style="width: 100%;"
                            />
                          </div>
                          <div className="tr-text">
                            <h4>证照</h4>
                            <p>泛微今承达产品著作权到期</p>
                          </div>
                        </div>
                        <div className="tr-rate">
                          <p>
                            <span className="text-black">8</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- <div className="col-sm-6 col-xl-4">
                <div className="card stat-widget">
                  <div className="card-body">
                    <h5 className="card-title">Social Media</h5>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary"><i data-feather="thumbs-up"></i></div>
                          <div className="tr-text">
                            <h4>New post reached 7k+likes</h4>
                            <p>02 March</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-info text-info"><i data-feather="twitch"></i></div>
                          <div className="tr-text">
                            <h4>Developer AMA is now live</h4>
                            <p>01 March</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-danger text-danger"><i data-feather="instagram"></i></div>
                          <div className="tr-text">
                            <h4>52 unread messages</h4>
                            <p>23 February</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-warning text-warning"><i data-feather="shopping-bag"></i></div>
                          <div className="tr-text">
                            <h4>2 new orders from shop page</h4>
                            <p>17 February</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transactions-list">
                      <div className="tr-item">
                        <div className="tr-company-name">
                          <div className="tr-icon tr-card-icon tr-card-bg-info text-info"><i data-feather="twitter"></i></div>
                          <div className="tr-text">
                            <h4>Hashtag #circl is trending</h4>
                            <p>03 February</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> --> */}
            </div>
          </div>
          {/* <div className="row" style="padding-left: 30px">
            <div className="col-md-12 col-lg-8 col-xl-12">
              <div className="card table-widget" style="height: 500px;">
                <div className="card-head">
                  <img className="tag" src="./assets/images/tag.png" alt="" />
                  <div className="card-title-txt my-4">纠纷诉讼</div>
                </div>
                <div className="card-body" style="padding: 0;">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">序号</th>
                          <th scope="col">案件名称</th>
                          <th scope="col">案件编号</th>
                          <th scope="col">经办日期</th>
                          <th scope="col">涉案金额</th>
                          <th scope="col">纠纷类别</th>
                          <th scope="col">案件状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>与卢金星金融借款合同纠纷</td>
                          <td>AJ-JJ-202008060001</td>
                          <td>2022-08-06</td>
                          <td>350,000</td>
                          <td>经济纠纷</td>
                          <td>
                            <span className="badge bg-success">上报待处理</span>
                          </td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>维森集团和易标公司采购合同纠纷案件</td>
                          <td>AJ-MM-202008050001</td>
                          <td>2022-08-05</td>
                          <td>120,000</td>
                          <td>买卖纠纷</td>
                          <td>
                            <span className="badge bg-danger">诉讼一审</span>
                          </td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>上海维森服饰集团合同纠纷案件</td>
                          <td>AJ-JJ-202008020010</td>
                          <td>2022-07-29</td>
                          <td>51,200</td>
                          <td>经济纠纷</td>
                          <td>
                            <span className="badge bg-success">确认律师</span>
                          </td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>上海维森工程设计院合同纠纷案件</td>
                          <td>AJ-JJ-202008020009</td>
                          <td>2022-07-29</td>
                          <td>30,000</td>
                          <td>经济纠纷</td>
                          <td>
                            <span className="badge bg-primary">调解</span>
                          </td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>陕西维森建工集团合同纠纷案件</td>
                          <td>AJ-JJ-202008020006</td>
                          <td>2022-07-29</td>
                          <td>210,010</td>
                          <td>经济纠纷</td>
                          <td>
                            <span className="badge bg-danger">诉讼二审</span>
                          </td>
                        </tr>
                        <tr>
                          <th>6</th>
                          <td>上海维森物流集团合同纠纷案件</td>
                          <td>AJ-JJ-202008020003</td>
                          <td>2022-07-28</td>
                          <td>56,200</td>
                          <td>经济纠纷</td>
                          <td>
                            <span className="badge bg-success">结案</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="row"
            // style="padding-left: 30px;"
          >
            <div className="col-md-12 col-xl-7">
              <div
                className="card table-widget"
                // style="height: 55vh;"
              >
                <div className="card-head">
                  <img className="tag" src="./assets/images/tag.png" alt="" />
                  <div className="card-title-txt my-4">律师查询</div>
                </div>
                <div
                  className="card-body"
                  // style="padding: 0;"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">名称</th>
                          <th scope="col">编号</th>
                          <th scope="col">职称</th>
                          <th scope="col">类型</th>
                          <th scope="col">擅长领域</th>
                          <th scope="col">服务次数</th>
                          <th scope="col">服务评价</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <img
                              src="../../assets/images/avatars/mjj.png"
                              alt=""
                            />
                            马俊杰
                          </th>
                          <td>8956765473986</td>
                          <td>
                            <span className="badge bg-info">中级</span>
                          </td>
                          <td>专职律师</td>
                          <td>民商事、刑事</td>
                          <td>10</td>
                          <td>
                            <span className="badge bg-info">良好</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              src="../../assets/images/avatars/cx.jpg"
                              alt=""
                            />
                            陈啸
                          </th>
                          <td>7857799843719</td>
                          <td>
                            <span className="badge bg-info">中级</span>
                          </td>
                          <td>专职律师</td>
                          <td>知识产权、劳动争议</td>
                          <td>8</td>
                          <td>
                            <span className="badge bg-success">一般</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              src="../../assets/images/avatars/cyc.png"
                              alt=""
                            />
                            崔迎春
                          </th>
                          <td>7857799843719</td>
                          <td>
                            <span className="badge bg-danger">初级</span>
                          </td>
                          <td>外聘律师</td>
                          <td>婚姻家庭、保险理赔</td>
                          <td>6</td>
                          <td>
                            <span className="badge bg-danger">一般</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              src="../../assets/images/avatars/fzx.jpg"
                              alt=""
                            />
                            傅志祥
                          </th>
                          <td>5894958428352</td>
                          <td>
                            <span className="badge bg-primary">中级</span>
                          </td>
                          <td>专职律师</td>
                          <td>房地产、建工</td>
                          <td>4</td>
                          <td>
                            <span className="badge bg-primary">良好</span>
                          </td>
                        </tr>
                        {/* <!-- <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <th scope="row"><img src="../../assets/images/avatars/profile-image.png" alt="">刘俊</th>
                        <td>500107</td>
                        <td>重庆市某律所</td>
                        <td><span className="badge bg-success">高级</span></td>
                        <td>国际贸易、海事海商、涉外仲裁诉讼</td>
                        <td>11</td>
                        <td><span className="badge bg-success">优秀</span></td>
                      </tr> --> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-5">
              <div
                className="card table-widget"
                // style="height: 55vh;"
              >
                <div className="card-head">
                  <img className="tag" src="./assets/images/tag.png" alt="" />
                  <div className="card-title-txt my-4">合同模板</div>
                </div>
                <div
                  className="card-body"
                  // style="padding: 0;"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">名称</th>
                          <th scope="col">所属部门</th>
                          <th scope="col">来源</th>
                          <th scope="col">失效日期</th>
                          <th scope="col">状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">
                            <img
                              src="../../assets/file.svg"
                              alt=""
                              // style="width: 20px;"
                            />
                            采购合同模板
                          </td>
                          <td>采购部</td>
                          <td>本地上传</td>
                          <td>23.12.31</td>
                          <td>
                            <span className="badge bg-success">启用</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">
                            <img
                              src="../../assets/file.svg"
                              alt=""
                              // style="width: 20px;"
                            />
                            销售合同模板
                          </td>
                          <td>业务部</td>
                          <td>在线生成</td>
                          <td>23.10.31</td>
                          <td>
                            <span className="badge bg-success">启用</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">
                            <img
                              src="../../assets/file.svg"
                              alt=""
                              // style="width: 20px;"
                            />
                            租赁合同模板
                          </td>
                          <td>租赁部</td>
                          <td>在线生成</td>
                          <td>23.10.31</td>
                          <td>
                            <span className="badge bg-success">启用</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">
                            <img
                              src="../../assets/file.svg"
                              alt=""
                              // style="width: 20px;"
                            />
                            服务合同模板
                          </td>
                          <td>服务部</td>
                          <td>在线生成</td>
                          <td>22.9.31</td>
                          <td>
                            <span className="badge bg-danger">停用</span>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">
                            <img
                              src="../../assets/file.svg"
                              alt=""
                              // style="width: 20px;"
                            />
                            软件许可模板
                          </td>
                          <td>软件部</td>
                          <td>在线生成</td>
                          <td>22.9.31</td>
                          <td>
                            <span className="badge bg-danger">停用</span>
                          </td>
                        </tr>
                        {/* <!-- <tr>
                        <td scope="row"><img src="../../assets/file.svg" alt="" style="width: 20px;">咨询类合同模板</td>
                        <td>F部门</td>
                        <td>本地上传</td>
                        <td>2024.9.31</td>
                        <td><span className="badge bg-success">启用</span></td>
                      </tr> --> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row" style="padding-left: 30px;">
            <div className="col-md-12 col-xl-7">
              <div className="card table-widget" style="height: 48vh">
                <div className="card-head">
                  <img className="tag" src="./assets/images/tag.png" alt="" />
                  <div className="card-title-txt my-4">风险识别</div>
                </div>
                <div className="card-body" style="padding: 0;">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">编号</th>
                          <th scope="col">规则</th>
                          <th scope="col">合同</th>
                          <th scope="col">阶段</th>
                          <th scope="col">类别</th>
                          <th scope="col">说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#53327</td>
                          <td>字符串</td>
                          <td>维森集团采购合同</td>
                          <td>
                            <span className="badge bg-primary">起草</span>
                          </td>
                          <td>
                            <span className="badge bg-info">资信变动</span>
                          </td>
                          <td>合同资信变动风险</td>
                        </tr>
                        <tr>
                          <td>#13328</td>
                          <td>清单</td>
                          <td>维森集团销售合同</td>
                          <td>
                            <span className="badge bg-primary">起草</span>
                          </td>
                          <td>
                            <span className="badge bg-success">管理风险</span>
                          </td>
                          <td>合同审核不到位</td>
                        </tr>
                        <tr>
                          <td>#35313</td>
                          <td>字符串</td>
                          <td>维森集团采购合同</td>
                          <td>
                            <span className="badge bg-success">履约</span>
                          </td>
                          <td>
                            <span className="badge bg-danger">业务风险</span>
                          </td>
                          <td>未能按时交付</td>
                        </tr>
                        <tr>
                          <td>#73423</td>
                          <td>清单</td>
                          <td>维森集团销售合同</td>
                          <td>
                            <span className="badge bg-success">履约</span>
                          </td>
                          <td>
                            <span className="badge bg-primary">财务风险</span>
                          </td>
                          <td>合同金额超额度付款</td>
                        </tr>
                        <tr>
                          <td>#54773</td>
                          <td>字符串</td>
                          <td>维森集团采购合同</td>
                          <td>
                            <span className="badge bg-success">履约</span>
                          </td>
                          <td>
                            <span className="badge bg-success">管理风险</span>
                          </td>
                          <td>倒签;关联交易</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-5">
              <div className="card table-widget" style="height: 48vh">
                <div className="card-head">
                  <img className="tag" src="./assets/images/tag.png" alt="" />
                  <div className="card-title-txt my-4">合规审查</div>
                </div>
                <div className="card-body" style="padding: 0;">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">名称</th>
                          <th scope="col">内容</th>
                          <th scope="col">状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>审查高风险岗位</td>
                          <td>公司新来了一个财务总监，需要做背调</td>
                          <td>
                            <span className="badge bg-success">已审查</span>
                          </td>
                        </tr>
                        <tr>
                          <td>审查特级供应商</td>
                          <td>审查供应商A集团</td>
                          <td>
                            <span className="badge bg-primary">待审查</span>
                          </td>
                        </tr>
                        <tr>
                          <td>审查特级客户</td>
                          <td>审查客户B集团</td>
                          <td>
                            <span className="badge bg-primary">待审查</span>
                          </td>
                        </tr>
                        <tr>
                          <td>审查重大合同</td>
                          <td>审查与C集团的采购合同</td>
                          <td>
                            <span className="badge bg-success">已审查</span>
                          </td>
                        </tr>
                        <tr>
                          <td>招投标</td>
                          <td>E省基建招投标项目审核</td>
                          <td>
                            <span className="badge bg-primary">待审查</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
