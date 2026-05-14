export default function CurrentInputFileSection({ t, form, setForm }) {
    const enabled = Boolean(form.current_input_file?.enabled)
    const mode = form.current_input_file?.mode || 'inline_text'

    return (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div className="space-y-1">
                <h3 className="font-semibold">{t('settings.currentInputFileTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('settings.currentInputFileDesc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-start gap-3 rounded-lg border border-border bg-background/60 p-4">
                    <input
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) => setForm((prev) => ({
                            ...prev,
                            current_input_file: {
                                ...prev.current_input_file,
                                enabled: e.target.checked,
                            },
                        }))}
                        className="mt-1 h-4 w-4 rounded border-border"
                    />
                    <div className="space-y-1">
                        <span className="text-sm font-medium block">{t('settings.currentInputFileEnabled')}</span>
                        <span className="text-xs text-muted-foreground block">{t('settings.currentInputFileDesc')}</span>
                    </div>
                </label>
                <label className="text-sm space-y-2">
                    <span className="text-muted-foreground">{t('settings.currentInputFileMode')}</span>
                    <select
                        value={mode}
                        disabled={!enabled}
                        onChange={(e) => setForm((prev) => ({
                            ...prev,
                            current_input_file: {
                                ...prev.current_input_file,
                                mode: e.target.value,
                            },
                        }))}
                        className="w-full bg-background border border-border rounded-lg px-3 py-2 disabled:opacity-60"
                    >
                        <option value="inline_text">{t('settings.currentInputFileModeInlineText')}</option>
                        <option value="upload_file">{t('settings.currentInputFileModeUploadFile')}</option>
                    </select>
                    <p className="text-xs text-muted-foreground">{t('settings.currentInputFileModeHelp')}</p>
                </label>
                <label className="text-sm space-y-2">
                    <span className="text-muted-foreground">{t('settings.currentInputFileMinChars')}</span>
                    <input
                        type="number"
                        min={0}
                        max={100000000}
                        disabled={!enabled || mode !== 'upload_file'}
                        value={form.current_input_file?.min_chars ?? 0}
                        onChange={(e) => setForm((prev) => ({
                            ...prev,
                            current_input_file: {
                                ...prev.current_input_file,
                                min_chars: Number(e.target.value || 0),
                            },
                        }))}
                        className="w-full bg-background border border-border rounded-lg px-3 py-2 disabled:opacity-60"
                    />
                    <p className="text-xs text-muted-foreground">{t('settings.currentInputFileHelp')}</p>
                </label>
            </div>
        </div>
    )
}
