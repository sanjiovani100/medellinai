# PowerShell Command Chaining Rule

## Rule Description

When executing multiple commands in sequence on Windows PowerShell, always use the semicolon (`;`) operator for command chaining instead of the ampersand (`&&`) operator.

## Correct Usage

```powershell
# Correct - Using semicolon for command chaining in PowerShell
cd project-directory; npm install; npm run dev
```

## Incorrect Usage

```powershell
# Incorrect - Using && for command chaining in PowerShell
cd project-directory && npm install && npm run dev
```

## Explanation

Windows PowerShell uses different syntax for command chaining compared to Bash or Command Prompt:

1. PowerShell uses the semicolon (`;`) as the command separator
2. The ampersand (`&&`) operator is not recognized as a valid statement separator in PowerShell
3. Using `&&` will result in a syntax error: "The token '&&' is not a valid statement separator in this version"

## Alternative Approaches

If conditional execution is needed (only run second command if first succeeds), use:

```powershell
# Run second command only if first succeeds
if ($?) { second-command }
```

Or use PowerShell's pipeline capabilities when appropriate:

```powershell
# Using PowerShell's pipeline
Get-ChildItem | Where-Object { $_.Length -gt 1MB }