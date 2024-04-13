import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyResourcePath', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active editor");
            return;
        }

        const document = editor.document;
        const selection = editor.selection;
        const position = selection.start;
        const formattedPath = extractPath(document, position);

        if (formattedPath) {
            await vscode.env.clipboard.writeText(`${formattedPath}`);
            vscode.window.showInformationMessage('Resource path copied to clipboard!');
        } else {
            vscode.window.showErrorMessage('Unable to find resource path!');
        }
    });

    context.subscriptions.push(disposable);
}

function extractPath(document: vscode.TextDocument, position: vscode.Position): string | null {
    let currentLine = position.line;
    let path = [];
    let indentLevelCurrentLine = getIndentationLevel(document.lineAt(currentLine).text);

    // Append the selected property
    const selectedProperty = getPropertyName(document.lineAt(currentLine).text.trim());
    if (selectedProperty) {
        path.push(selectedProperty);
    }

    while (currentLine >= 0) {
        const lineText = document.lineAt(currentLine).text;
        const trimmedLine = lineText.trim();
        if (isPropertyDeclaration(trimmedLine)) {
            const indentLevel = getIndentationLevel(lineText);
            if (indentLevel < indentLevelCurrentLine) {
                const propertyName = getPropertyName(trimmedLine);
                if (propertyName) {
                    path.unshift(propertyName);
                    indentLevelCurrentLine = indentLevel;
                }
            }
        }
        currentLine--;
    }
    return path.join('.');
}

function isPropertyDeclaration(line: string): boolean {
    return line.endsWith('{');
}

function getPropertyName(line: string): string | null {
    const match = line.match(/(\w+)\s*:/);
    return match ? match[1] : null;
}

function getIndentationLevel(line: string): number {
    return line.search(/\S/);  // Returns the index of the first non-whitespace character
}

export function deactivate() {}
