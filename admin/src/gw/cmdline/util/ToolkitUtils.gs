package gw.cmdline.util

uses java.io.BufferedReader
uses java.io.File
uses java.util.LinkedHashSet
uses gw.pl.io.BOMAwareInputStream;
uses gw.util.StreamUtil
uses java.io.FileInputStream
uses gw.wsi.pl.systemtoolsapi.types.complex.AWRReportUserSettings
uses gw.api.database.AWRReportUserSettingsFactory
uses java.io.InputStreamReader
uses java.lang.Integer
uses java.lang.Math
uses java.lang.IllegalArgumentException
uses java.lang.StringBuilder

class ToolkitUtils {
  /**
   * Reads a simple CSV file (no commas allowed in content) into a string array.
   */
  static function readSimpleCSV( fileName : String ) : String[] {
    var f = new File( fileName )
    if( not f.exists() ) throw "The file #{fileName} does not exist"
    var input = new BOMAwareInputStream(new FileInputStream(f))
    input.removeBOM()
    var returnSet = new LinkedHashSet<String>()
    var stream = new BufferedReader(new InputStreamReader(input))
    var l = stream.readLine()
    do {
      var valuesOnLine = l.split(",").map( \ s -> s.trim() )
      for( claimNum in valuesOnLine ) {
        if( not returnSet.contains( claimNum ) ) returnSet.add( claimNum )
      }
      l = stream.readLine()
    } while(l != null)
    return returnSet.toTypedArray()
  }

  static function readAWRRunParams( fileName : String ) : AWRReportUserSettings {
    var f = new File(fileName)
    if (not f.exists()) throw "The file ${fileName} does not exist"
    var props = new java.util.Properties()
    using (var input = new BOMAwareInputStream(new FileInputStream(f)),
        var r = StreamUtil.getInputStreamReader(input)) {
      input.removeBOM()
      props.load(r);
    }
    var awrReportUserSettingsFactory = new AWRReportUserSettingsFactory()
    awrReportUserSettingsFactory.applyProperties(props)
    return createAWRReportUserSettings(awrReportUserSettingsFactory)
  }


  static function createAWRReportUserSettings(awrReportUserSettingsFactory : AWRReportUserSettingsFactory ) : AWRReportUserSettings {
    var userSettings = new AWRReportUserSettings()
    userSettings.ProbeVDollarTables = awrReportUserSettingsFactory.AwrReportUserSettings.ProbeVDollarTables
    userSettings.SearchForQueriesWithMultiplePlans = awrReportUserSettingsFactory.AwrReportUserSettings.SearchForQueriesWithMultiplePlans
    userSettings.SearchForQueriesOnlyInFirstSnapshot = awrReportUserSettingsFactory.AwrReportUserSettings.SearchForQueriesOnlyInFirstSnapshot
    userSettings.SearchForQueriesOnlyInLastSnapshot = awrReportUserSettingsFactory.AwrReportUserSettings.SearchForQueriesOnlyInLastSnapshot
    userSettings.IncludeMetadataForInstrumentationTables = awrReportUserSettingsFactory.AwrReportUserSettings.IncludeMetadataForInstrumentationTables
    userSettings.IncludeDatabaseStatistics = awrReportUserSettingsFactory.AwrReportUserSettings.IncludeDatabaseStatistics
    userSettings.ProbeInMemorySQLMonitor = awrReportUserSettingsFactory.AwrReportUserSettings.ProbeInMemorySQLMonitor
    userSettings.ProbeOnDiskSQLMonitor = awrReportUserSettingsFactory.AwrReportUserSettings.ProbeOnDiskSQLMonitor
    userSettings.CapturePeakedBindVariables = awrReportUserSettingsFactory.AwrReportUserSettings.CapturePeakedBindVariables
    userSettings.CapturePeakedBindVariablesFromAWR = awrReportUserSettingsFactory.AwrReportUserSettings.CapturePeakedBindVariablesFromAWR
    userSettings.GenerateCallsToASHScripts = awrReportUserSettingsFactory.AwrReportUserSettings.GenerateCallsToASHScripts
    userSettings.ConcurrentMessagingAnalysis = awrReportUserSettingsFactory.AwrReportUserSettings.ConcurrentMessagingAnalysis
    userSettings.ConcurrentBatchProcessAndWorkerAnalysis = awrReportUserSettingsFactory.AwrReportUserSettings.ConcurrentBatchProcessAndWorkerAnalysis
    userSettings.ConcurrentHistoryAnalysis = awrReportUserSettingsFactory.AwrReportUserSettings.ConcurrentHistoryAnalysis
    return userSettings
  }

  static function getAWRReportUserSettingsFactory( userSettings : AWRReportUserSettings ) : AWRReportUserSettingsFactory {
    var awrReportUserSettingsFactory = new AWRReportUserSettingsFactory()
    awrReportUserSettingsFactory.AwrReportUserSettings.ProbeVDollarTables = userSettings.ProbeVDollarTables
    awrReportUserSettingsFactory.AwrReportUserSettings.SearchForQueriesWithMultiplePlans = userSettings.SearchForQueriesWithMultiplePlans
    awrReportUserSettingsFactory.AwrReportUserSettings.SearchForQueriesOnlyInFirstSnapshot = userSettings.SearchForQueriesOnlyInFirstSnapshot
    awrReportUserSettingsFactory.AwrReportUserSettings.SearchForQueriesOnlyInLastSnapshot = userSettings.SearchForQueriesOnlyInLastSnapshot
    awrReportUserSettingsFactory.AwrReportUserSettings.IncludeMetadataForInstrumentationTables = userSettings.IncludeMetadataForInstrumentationTables
    awrReportUserSettingsFactory.AwrReportUserSettings.IncludeDatabaseStatistics = userSettings.IncludeDatabaseStatistics
    awrReportUserSettingsFactory.AwrReportUserSettings.ProbeInMemorySQLMonitor = userSettings.ProbeInMemorySQLMonitor
    awrReportUserSettingsFactory.AwrReportUserSettings.ProbeOnDiskSQLMonitor = userSettings.ProbeOnDiskSQLMonitor
    awrReportUserSettingsFactory.AwrReportUserSettings.CapturePeakedBindVariables = userSettings.CapturePeakedBindVariables
    awrReportUserSettingsFactory.AwrReportUserSettings.CapturePeakedBindVariablesFromAWR = userSettings.CapturePeakedBindVariablesFromAWR
    awrReportUserSettingsFactory.AwrReportUserSettings.GenerateCallsToASHScripts = userSettings.GenerateCallsToASHScripts
    awrReportUserSettingsFactory.AwrReportUserSettings.ConcurrentMessagingAnalysis = userSettings.ConcurrentMessagingAnalysis
    awrReportUserSettingsFactory.AwrReportUserSettings.ConcurrentBatchProcessAndWorkerAnalysis = userSettings.ConcurrentBatchProcessAndWorkerAnalysis
    awrReportUserSettingsFactory.AwrReportUserSettings.ConcurrentHistoryAnalysis = userSettings.ConcurrentHistoryAnalysis
    return awrReportUserSettingsFactory
  }

  static function printTable(header : List<String>, rows : List<List<String>>) {
    var widths = header.map( \ e -> e.length)
    for (var row in rows) {
      if (row.Count != header.Count) {
        throw new IllegalArgumentException("Unexpected number of elements ${row.Count}")
      }
      for (var v in row index i) {
        widths[i] = Math.max(widths[i], v != null ? v.length : 0)
      }
    }
    printRow(header, widths)
    printRow(widths.map( \ w -> "-".repeat(w)), widths)
    for (var row in rows) {
      printRow(row, widths)
    }
  }

  private static function printRow(row : List<String>, width : List<Integer>) {
    var sb = new StringBuilder()
    for (var v in row index i) {
      if (not sb.isEmpty()) {
        sb.append(" | ")
      }
      sb.append((v?:"").rightPad(width[i]))
    }
    print(sb)
  }
}
