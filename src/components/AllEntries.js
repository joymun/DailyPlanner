import {Entry} from './Entry'

export function AllEntries({ entries, onDelete }) {
  if(!entries) {
    return
  }
  return (
    <>
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} onDelete={onDelete} />
      ))}
    </>
  );
}
