type TagRowProps = {
  ariaLabel: string;
  tags: string[];
};

export function TagRow({ ariaLabel, tags }: TagRowProps) {
  return (
    <div className="tag-row" aria-label={ariaLabel}>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
