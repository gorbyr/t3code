/**
 * Speech plumbing and new preview/relay copy: local user-facing messages only.
 * Add the English key first, then its zh-Hans entry — English is the source of truth.
 */
export const enMessages = {
  "voice.speech.transcriptionFailed":
    "Voice transcription failed. Check the destination in Settings → Voice.",
  "voice.speech.microphoneFallback": "Microphone {index}",
  "voice.speech.cleanupFailedTitle": "Transcript cleanup failed",
  "voice.speech.cleanupFailedDescription": "The original transcript was added.",
  "voice.speech.cleanupUnavailable":
    "The draft's environment is unavailable for transcript cleanup.",
  "voice.speech.startFailed": "Could not start voice input",
  "voice.speech.unavailable": "Voice input is not available",
  "voice.speech.modelNotReady": "The model is not ready. Try downloading it again.",
  "voice.speech.modelDownloadFailed":
    "Could not download the model. Check this environment's connection and try again.",
  "app.voiceExtra.mcp.requestFailed": "Request failed.",
  "app.voiceExtra.mcp.approvalUnavailable": "T3 could not ask for approval here.",
  "app.voiceExtra.mcp.toolNotCallable": "This app cannot call that tool.",
  "app.voiceExtra.mcp.declined": "Declined by the user.",
  "app.voiceExtra.mcp.linkNeedsClick": "Links open only from a click in the app.",
  "app.voiceExtra.mcp.messagesUnavailable": "Messages are not available here.",
  "app.voiceExtra.mcp.allowTool": "Allow {server} to run {tool}?\n{arguments}",
  "app.voiceExtra.mcp.sendMessage": "Send this message from {server}?\n{text}",
  "app.voiceExtra.mcp.saveFiles": "Save {files} from {server}?",
  "app.voiceExtra.mcp.fileEmpty": "{file} has no contents.",
  "app.voiceExtra.mcp.fileTooLarge": "{file} is too large to save.",
  "app.voiceExtra.mcp.loadFailed": "Unable to load the {server} app",
  "app.voiceExtra.markdown.previewUnavailable": "Preview access is unavailable for this client.",
  "app.voiceExtra.markdown.environmentDisconnected": "Environment is not connected.",
  "app.voiceExtra.link.installCancelled": "Relay client installation was cancelled.",
  "app.voiceExtra.link.installIncomplete":
    "The relay client install completed without a final status.",
  "app.voiceExtra.link.wrongEnvironment": "Relay returned credentials for a different environment.",
  "app.voiceExtra.link.wrongProvider":
    "Relay returned credentials for a different endpoint provider.",
  "app.voiceExtra.link.notConnected": "The environment is not connected.",
  "app.voiceExtra.link.relayUrlMissing": "T3CODE_RELAY_URL is not configured.",
  "app.voiceExtra.worker.unreadableReply": "The Office engine sent an unreadable reply",
  "app.voiceExtra.worker.callAborted": "The call was aborted",
  "app.voiceExtra.worker.previewTimeout":
    "This document took too long to preview. Open it in another app.",
  "app.voiceExtra.worker.engineClosed": "The Office engine was closed",
  "app.voiceExtra.worker.superseded": "Replaced by a newer call",
} as const;

export const jaMessages: Partial<Record<keyof typeof enMessages, string>> = {
  "voice.speech.transcriptionFailed":
    "音声文字起こしに失敗しました。設定 → Voice の送信先を確認してください。",
  "voice.speech.microphoneFallback": "マイクロフォン {index}",
  "voice.speech.cleanupFailedTitle": "トランスクリプトのクリーンアップに失敗",
  "voice.speech.cleanupFailedDescription": "元のトランスクリプトが追加されました。",
  "voice.speech.cleanupUnavailable":
    "ドラフトの環境がトランスクリプトのクリーンアップに利用できません。",
  "voice.speech.startFailed": "音声入力を開始できませんでした",
  "voice.speech.unavailable": "音声入力が利用できません",
  "voice.speech.modelNotReady": "モデルの準備ができていません。再度ダウンロードしてください。",
  "voice.speech.modelDownloadFailed":
    "モデルのダウンロードに失敗しました。環境の接続を確認して再試行してください。",
  "app.voiceExtra.mcp.requestFailed": "リクエスト失敗。",
  "app.voiceExtra.mcp.approvalUnavailable": "T3 はここで承認を求められませんでした。",
  "app.voiceExtra.mcp.toolNotCallable": "このアプリはそのツールを呼び出せません。",
  "app.voiceExtra.mcp.declined": "ユーザーにより却下されました。",
  "app.voiceExtra.mcp.linkNeedsClick": "リンクはアプリ内のクリックで開きます。",
  "app.voiceExtra.mcp.messagesUnavailable": "ここではメッセージを利用できません。",
  "app.voiceExtra.mcp.allowTool": "{server} に {tool} の実行を許可しますか？\n{arguments}",
  "app.voiceExtra.mcp.sendMessage": "{server} からこのメッセージを送信しますか？\n{text}",
  "app.voiceExtra.mcp.saveFiles": "{server} の {files} を保存しますか？",
  "app.voiceExtra.mcp.fileEmpty": "{file} に内容がありません。",
  "app.voiceExtra.mcp.fileTooLarge": "{file} は保存するには大きすぎます。",
  "app.voiceExtra.mcp.loadFailed": "{server} アプリを読み込めません。",
  "app.voiceExtra.markdown.previewUnavailable": "このクライアントではプレビューを利用できません。",
  "app.voiceExtra.markdown.environmentDisconnected": "環境が接続されていません。",
  "app.voiceExtra.link.installCancelled":
    "リレークライアントのインストールがキャンセルされました。",
  "app.voiceExtra.link.installIncomplete":
    "リレークライアントのインストールが完了しましたが、最終ステータスがありません。",
  "app.voiceExtra.link.wrongEnvironment": "リレーは別の環境の認証情報を返しました。",
  "app.voiceExtra.link.wrongProvider":
    "リレーは別のエンドポイントプロバイダーの認証情報を返しました。",
  "app.voiceExtra.link.notConnected": "環境が接続されていません。",
  "app.voiceExtra.link.relayUrlMissing": "T3CODE_RELAY_URL が設定されていません。",
  "app.voiceExtra.worker.unreadableReply": "Office エンジンが読めない返信を送信しました。",
  "app.voiceExtra.worker.callAborted": "呼び出しが中止されました。",
  "app.voiceExtra.worker.previewTimeout":
    "この文書のプレビューに時間がかかりすぎました。別のアプリで開いてください。",
  "app.voiceExtra.worker.engineClosed": "Office エンジンが閉じられました。",
  "app.voiceExtra.worker.superseded": "新しい呼び出しに置き換えられました。",
};

export const zhHansMessages: Partial<Record<keyof typeof enMessages, string>> = {
  "voice.speech.transcriptionFailed": "语音转写失败。请在“设置 → 语音”中检查目标。",
  "voice.speech.microphoneFallback": "麦克风 {index}",
  "voice.speech.cleanupFailedTitle": "转写整理失败",
  "voice.speech.cleanupFailedDescription": "已添加原始转写结果。",
  "voice.speech.cleanupUnavailable": "草稿所在环境不可用，无法整理转写结果。",
  "voice.speech.startFailed": "无法启动语音输入",
  "voice.speech.unavailable": "语音输入不可用",
  "voice.speech.modelNotReady": "模型尚未就绪，请重新下载。",
  "voice.speech.modelDownloadFailed": "无法下载模型。请检查此环境的连接后重试。",
  "app.voiceExtra.mcp.requestFailed": "请求失败。",
  "app.voiceExtra.mcp.approvalUnavailable": "T3 无法在此处请求批准。",
  "app.voiceExtra.mcp.toolNotCallable": "此应用无法调用该工具。",
  "app.voiceExtra.mcp.declined": "用户已拒绝。",
  "app.voiceExtra.mcp.linkNeedsClick": "只有点击应用内的链接才能打开。",
  "app.voiceExtra.mcp.messagesUnavailable": "此处无法发送消息。",
  "app.voiceExtra.mcp.allowTool": "允许 {server} 运行 {tool}？\n{arguments}",
  "app.voiceExtra.mcp.sendMessage": "从 {server} 发送这条消息？\n{text}",
  "app.voiceExtra.mcp.saveFiles": "保存来自 {server} 的 {files}？",
  "app.voiceExtra.mcp.fileEmpty": "{file} 没有内容。",
  "app.voiceExtra.mcp.fileTooLarge": "{file} 太大，无法保存。",
  "app.voiceExtra.mcp.loadFailed": "无法加载 {server} 应用",
  "app.voiceExtra.markdown.previewUnavailable": "此客户端无法使用预览。",
  "app.voiceExtra.markdown.environmentDisconnected": "环境未连接。",
  "app.voiceExtra.link.installCancelled": "已取消中继客户端安装。",
  "app.voiceExtra.link.installIncomplete": "中继客户端安装结束，但没有返回最终状态。",
  "app.voiceExtra.link.wrongEnvironment": "中继返回了其他环境的凭据。",
  "app.voiceExtra.link.wrongProvider": "中继返回了其他端点提供商的凭据。",
  "app.voiceExtra.link.notConnected": "环境未连接。",
  "app.voiceExtra.link.relayUrlMissing": "未配置 T3CODE_RELAY_URL。",
  "app.voiceExtra.worker.unreadableReply": "Office 引擎返回了无法读取的回复",
  "app.voiceExtra.worker.callAborted": "调用已中止",
  "app.voiceExtra.worker.previewTimeout": "此文档预览耗时过长，请用其他应用打开。",
  "app.voiceExtra.worker.engineClosed": "Office 引擎已关闭",
  "app.voiceExtra.worker.superseded": "已被更新的调用替换",
};
