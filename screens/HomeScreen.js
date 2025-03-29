import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ReportForm from '../components/ReportForm';
import ReportCard from '../components/ReportCard';
import { reportService } from '../services/reportService';

export default function HomeScreen({ navigation }) {
  const [reports, setReports] = useState([]);

  const loadReports = () => {
    const data = reportService.getReports();
    setReports([...data]);
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <ReportForm onReportAdded={loadReports} />
      {reports.map((report) => (
        <ReportCard
          key={report.id}
          report={report}
          onPress={() => navigation.navigate('DetalleReporte', { id: report.id })}
        />
      ))}
    </ScrollView>
  );
}