/**
 * 用户权限管理相关
 */
const UPMS_BASE = '/api/upms';
export const UpmsApi = {
  /**
   * 登陆日志 API
   */
  loginLog: `${UPMS_BASE}/loginLog`,
  /**
   * 钱包出账 API
   */
  walletExpenditure: `${UPMS_BASE}/walletExpenditure`,
  /**
   * 钱包入账 API
   */
  walletIncome: `${UPMS_BASE}/walletIncome`,
  /**
   * 钱包流水 API
   */
  walletLog: `${UPMS_BASE}/walletLog`,
  /**
   * 钱包 API
   */
  wallet: `${UPMS_BASE}/wallet`,

  /**
   * 企业员工API
   */
  employees: `${UPMS_BASE}/enterprise/employees`,
  /**
   * 企业员工API
   */
  uploadAvatar: `${UPMS_BASE}/enterprise/upload`,
};


/**
 * 食堂相关
 */
const RST_BASE = '/api/rst';
export const RstApi = {
  /**
   * 欢迎页 - 统计数据
   */
  ANALYSIS: `${RST_BASE}/analysis`,
  /**
   * 欢迎页 - 趋势数据
   */
  ANALYSIS_TREND: `${RST_BASE}/analysis/trend`,
  /**
   * 收费
   */
  toll: `${RST_BASE}/toll`,
  /**
   * 收费规则
   */
  rule: `${RST_BASE}/rule`,
  /**
   * 额外收费项
   */
  extraCost: `${RST_BASE}/extraCost`,
  /**
   * 陌生人记录
   */
  strangerLog: `${RST_BASE}/strangerLog`,
};
