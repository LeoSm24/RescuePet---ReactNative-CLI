let reports = [];

export const reportService = {
  addReport: (report) => {
    reports.push(report);
  },
  getReports: () => reports,
  getReportById: (id) => reports.find((r) => r.id === id),
};