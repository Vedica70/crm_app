import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  llmOptions = ['Claude', 'GPT4', 'GPT5-mini'];
  selectedLLM: string = 'Claude';

  constructor(private router: Router) {}

  onClose() {
    this.closeSidebar.emit();
  }

  selectLLM(llm: string) {
    this.selectedLLM = llm;
    // Navigate to service calendar after selection
    this.router.navigate(['/service-calendar']);
    // Close the sidebar after navigation
    this.onClose();
  }
}
