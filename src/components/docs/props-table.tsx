export type PropsTableRow = {
  prop: string;
  type: string;
  default?: string;
  description?: string;
};

type PropsTableProps = {
  rows: readonly PropsTableRow[];
  /** First column heading, e.g. "Parameter" or "Return value" for hooks. */
  nameLabel?: string;
};

/** API reference table used from registry MDX: `<PropsTable rows={[{ prop, type, default, description }]} />`. */
export function PropsTable({ rows, nameLabel = "Prop" }: PropsTableProps) {
  return (
    <div className="not-prose my-4 w-full overflow-x-auto rounded-lg border">
      <table className="w-full min-w-xl border-collapse text-start text-sm">
        <thead className="bg-muted/40 text-xs text-muted-foreground">
          <tr>
            <th scope="col" className="px-3 py-2 text-start font-medium">
              {nameLabel}
            </th>
            <th scope="col" className="px-3 py-2 text-start font-medium">
              Type
            </th>
            <th scope="col" className="px-3 py-2 text-start font-medium">
              Default
            </th>
            <th scope="col" className="px-3 py-2 text-start font-medium">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="border-t align-top">
              <td className="px-3 py-2 whitespace-nowrap">
                <code className="font-mono text-[0.8125rem] font-medium text-foreground">
                  {row.prop}
                </code>
              </td>
              <td className="px-3 py-2">
                <code className="font-mono text-[0.8125rem] wrap-break-word text-muted-foreground">
                  {row.type}
                </code>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                {row.default ? (
                  <code className="font-mono text-[0.8125rem] text-muted-foreground">
                    {row.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
              <td className="px-3 py-2 text-muted-foreground">{row.description ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
